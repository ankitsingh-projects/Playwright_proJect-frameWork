const {test,expect} = require('@playwright/test');

test("saucdemo", async({page}) =>{

await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveURL('https://www.saucedemo.com/');
await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
await page.locator('[type="submit"]').click();
await expect(page.locator('[class*=error-message-container]')).toHaveText('Epic sadface: Username is required');
await page.reload();
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce'); 
await page.locator('[type="submit"]').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

await expect(page.locator('.title')).toHaveText('Products');

const Item_name= await page.locator('.inventory_item_name').allTextContents();
console.log(Item_name);

const item_Price= await page.locator('.inventory_item_price').allTextContents();
console.log(item_Price);

const filter_Options = await page.locator('.product_sort_container').allTextContents();

const optionValue = ["Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)"];

expect(filter_Options).toEqual(optionValue);

await page.locator('.product_sort_container').selectOption('Price (low to high)');

await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
await page.locator('[id*="add-to-cart"]').first().click();
await page.locator('.shopping_cart_link').click();
await page.locator('[id="checkout"]').click();
await page.locator('#first-name').fill('john');
await page.locator('#last-name').fill('cena');
await page.locator('#postal-code').fill('21765');
await page.locator('#continue').click();
await page.locator('#finish').click();
await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
await page.locator('#back-to-products').click();

});

test('child window using browser fixture', async ({browser})=> {

const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const childWindow = await page.locator('.blinkingText').first();

const [newPagec] = await Promise.all ([
context.waitForEvent('page'),
childWindow.click(),
])
const text2 = await newPagec.locator('.inner-box h1').textContent();
console.log(text2);
});


test('child window using page fixture', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const ChildWindow = await page.locator('.blinkingText').first();

  const [newPagecW] = await Promise.all([
    page.waitForEvent('popup'),
   ChildWindow.click()
  ]);

  const text1 = await newPagecW.locator('.inner-box h1').textContent();

  console.log(text1);

});

test('testfilpkart', async ({page})=>{

  await page.goto('https://www.flipkart.com/');
  await page.locator('[alt="Login"]').click();
  await page.locator('[type="text"]').last().fill("avcde@fgmail.com")
})
