const {test,expect} = require('@playwright/test');

// import { generateFirstName, generateLastName } from '../utils/Registration_data_lets_sHop.js';
// import { generateR_eMail } from '../utils/Registration_data_lets_sHop.js';
import { 
  generateFirstName, 
  generateLastName, 
  generateR_eMail,
  generatePhoneNumber,
  generateOccupation,
  selectGender,
  generatePassword
} from '../utils/Registration_data_lets_sHop.js';

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


test.only('Signup', async ({page})=> {

await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

// Sign up 
await page.locator('[routerlink="/auth/register"]').click();
await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/register')

// all register *required field asserations 
await page.locator('[type="submit"]').click();

await expect(page.locator('div [class="invalid-feedback"]').nth(0)).toHaveText("*First Name is required");
await expect(page.locator('div [class="invalid-feedback"]').nth(1)).toHaveText("*Email is required");
await expect(page.locator('div [class="invalid-feedback"]').nth(2)).toHaveText("*Phone Number is required");
await expect(page.locator('div [class="invalid-feedback"]').nth(3)).toHaveText("*Password is required");
await expect(page.locator('div [class="invalid-feedback"]').nth(4)).toHaveText("Confirm Password is required");
await expect(page.locator('[class="row mb-2"]').last()).toContainText('*Please check above checkbox');

await page.reload();

const firstName = generateFirstName(6);
const lastName = generateLastName(4);
const email = generateR_eMail();
const Phone = generatePhoneNumber();
const occupation = generateOccupation();
const gender = selectGender();
const User_Password = generatePassword();
await page.locator('#firstName').fill(firstName);
await page.locator('#lastName').fill(lastName);
await page.locator('#userEmail').fill(email);
await page.locator('#userMobile').fill(Phone);
await page.locator('.custom-select').selectOption(occupation);
await page.locator(`input[value="${gender}"]`).check();
await page.locator('#userPassword').fill(User_Password);
await page.locator('#confirmPassword').fill(User_Password);

await page.locator('[type="checkbox"]').click();
await page.locator('[value="Register"]').click();




})

// test('child window', async ({page})=> {

// // const context = await browser.newContext();
// // const page = await context.newPage();

// // await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
// // const childWindow = await page.locator('.blinkingText');

// // const [newPagecW] = await Promise.all ([
// // context.waitForEvent('page'),
// // childWindow.click(),
// // ])
// // const text1 = await newPagecW.locator('.inner-box h1').textContent();
// // console.log(text1);



// // test.only('child window using page fixture', async ({ page }) => {

//   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

//   const [newPagecW] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('.blinkingText').click()
//   ]);

//   const text1 = await newPagecW.locator('.inner-box h1').textContent();

//   console.log(text1);

// });















