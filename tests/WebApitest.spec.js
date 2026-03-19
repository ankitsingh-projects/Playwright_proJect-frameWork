const {test,expect,request}= require('@playwright/test');
let token;
const loginPayLoad = {userEmail: "testtest5@gmail.com", userPassword: "Was@1234"};

const orderPayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}; 

let IdOrder;
test.beforeAll( async ()=>{

const apiContext = await request.newContext();
const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
    {
        data:loginPayLoad
    })
    expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
token = loginResponseJson.token;
console.log(token);


const OrderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', 
    {
        data:orderPayload,
    
   headers:{
    'authorization': token,
    'content-Type': 'application/json'
   },
})
  expect(OrderResponse.ok()).toBeTruthy();
   const OrderResponseJSON = await OrderResponse.json();
        console.log(OrderResponseJSON);
        IdOrder = OrderResponseJSON.orders[0];
})


test('dashboard to placeOrder', async ({page}) => {


await page.addInitScript( value => {
window.localStorage.setItem('token', value);
}, token);
await page.goto('https://rahulshettyacademy.com/client');
await page.locator('button[routerlink*="myorders"]').click();
await page.locator('tbody').waitFor();

const orderRow = await page.locator('tbody tr');

for(let i=0; i< await orderRow.count(); ++i){
 const roworderID = await orderRow.nth(i).locator("th").textContent();
if(roworderID.includes(IdOrder)){
await orderRow.nth(i).locator("button").first().click();
break;
}
}
})


 