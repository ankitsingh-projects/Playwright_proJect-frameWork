const {test,expect,request} = require('@playwright/test');

const loginPayload = {userEmail: "testtest5@gmail.com", userPassword: "Was@1234"};
const orderPayload = {orders: [{country: "cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
let token ;
let orderID;

test.beforeAll( async ()=>
    
    {
        const apiContext = await request.newContext();
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:loginPayload
        } )

        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.token;
        console.log(token); 

    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data:orderPayload,
            headers:{

                'authorization':token,
                'content-Type': 'application/json'
            }
        })
        const orderResponseJSON = await orderResponse.json();
        console.log(orderResponseJSON);
        orderID = orderResponseJSON.orders[0];


    })

test('shope2e', async ({page})=>{

// // url navigation and asseration 
// await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
// await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/auth/login");

// // title asseration 
// await expect(page).toHaveTitle("Let's Shop");

// //login
// await page.locator('[id="userEmail"]').fill("testtest5@gmail.com");
// await page.locator('[id="userPassword"]').fill('Was@1234');
 //await page.locator('[id="login"]').click();


 await page.addInitScript(value => {

window.localStorage.setItem('token', value);
}, token )

await page.goto("https://rahulshettyacademy.com/client/");

// //await expect(page).toHaveURL("https://rahulshettyacademy.com/client/ecom/dashboard/dash");
// await page.locator('button[routerlink*="myorders"]').click();

// await page.locator('["tbody"]').waitFor();

// const orderRow = await page.locator('tbody tr');

// for(let i=0; i< await orderRow.count(); ++i){
//  const roworderID = await orderRow.nth(i).locator("th").textContent();
// if(orderID.includes(roworderID)){
// await orderRow.nth(i).locator("button").first().click();
// await page.pause();

})

// }

// })