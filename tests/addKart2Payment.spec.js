const {test,expect} = require('@playwright/test');
const {user_Login} = require('../POM/login.js');
const {Payment} = require('../utils/Payment_Page.js');

async function addProductToCart(page, index) {
  await page.getByText("View").nth(index).click();
  const addToCart = page.locator('.product-buttons [class*=btn-primary]');
  await expect(addToCart).toBeVisible();
  await addToCart.click();
  await page.locator('a[routerlink="/dashboard"]').click();
}

async function login(page){
  const user_Email = "testtest5@gmail.com";
  const user_Password = "Was@1234";
  const Login = new user_Login(page);
  Login.valid_login(user_Email,user_Password);
}

test("Url_navigation & asseration on home page", async ({page})=>{ 
// url navigation and asseration 
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');

//test asseration Text Content , partial text
   await expect(page.locator('.blink_me')).toHaveText("Register to sign in with your personal account");
   await expect(page.locator('[href*="academy"]')).toContainText(" dummywebsite");

   // element visible asseration 
 await expect(page.locator('.title em')).toBeVisible();

 //element length asseration 
 await expect(page.locator('.title')).toHaveCount(7);

// title asseration 
await expect(page).toHaveTitle("Let's Shop");

//Soft assertions do not stop the test on failure.
//Test continues even if assertion fails. 
await expect.soft(page.locator('[routerlink="/auth/register"]')).toBeVisible();

//Negative Assertions 
await expect(page.locator('#error')).not.toBeVisible();
});


test('dashboard to placeOrder', async ({page}) => {
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
//await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
login(page);

await expect(page.locator('[class="py-2 border-bottom ml-3"] div[class*="star-inserted"]')).toHaveCount(8);
await expect(page.locator('[class="py-2 ml-3"] [type="checkbox"]')).toHaveCount(2);
await expect(page.locator('[class="m-2 blink_me"]')).toHaveText(" User can only see maximum 9 products on a page");
await expect(page.locator('[id="res"]')).toHaveText("Showing 3 results   | ");

await expect(page.locator('[class="card"]')).toHaveCount(3);

const titles = page.locator('[style="text-transform: uppercase;"]');
const Count = await titles.count();

for(let i=0; i<Count; i++){
  const product_Names = await titles.nth(i).textContent();
  console.log(product_Names);
}

//await addProductToCart(page, 0);
await addProductToCart(page, 1);
//await addProductToCart(page, 2);

await page.locator('[routerlink="/dashboard/cart"]').click();
await expect(page.locator('[class="heading cf"] h1')).toHaveText("My Cart");
await page.getByText('Checkout').click({force:true});

//Payment(page);
await Payment(page);
await page.locator('[class*="action__submit"]').click();
});

test("OrderID extraction as web table", async ({page})=> {
    const user_Email = "testtest5@gmail.com";
  const user_Password = "Was@1234";
const Login = new user_Login(page);
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await Login.valid_login(user_Email,user_Password);
await page.locator('[routerlink="/dashboard/myorders"]').click();
await page.locator('.table  tbody').first().waitFor();
const Rows= await page.locator('tbody tr')
for(let i=0; i<await Rows.count(); i++){
const rowOrderId= await Rows.nth(i).locator('th').textContent();
if (rowOrderId.includes(rowOrderId)){

await Rows.nth(i).locator("button").first().click();

const orderIdDetails = await page.locator('.col-text').textContent();
await console.log(orderIdDetails);
await expect(orderIdDetails.includes(rowOrderId.trim())).toBeTruthy();
break;
}
}
})
