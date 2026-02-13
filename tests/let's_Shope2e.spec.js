const {test,expect} = require('@playwright/test');

test("my first test", async ({page})=>{ 
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
//await expect(page.locator('#error')).not.toBeVisible();



});

test.only('child window', async ({browser})=> {

const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const childWindow = await page.locator('.blinkingText');

const [newPagecW] = await Promise.all ([
context.waitForEvent('page'),
childWindow.click(),
])
const text1 = await newPagecW.locator('.inner-box h1').textContent();
console.log(text1);

})