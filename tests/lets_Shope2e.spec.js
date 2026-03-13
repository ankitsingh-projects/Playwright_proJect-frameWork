// const {test,expect} = require('@playwright/test');
// const {user_Login} = require('../POM/login.js');
// import {Payment} from '../utils/Payment_Page.js';
// import { 
//   generateFirstName, 
//   generateLastName, 
//   generateR_eMail,
//   generatePhoneNumber,
//   generateOccupation,
//   selectGender,
//   generatePassword
// } from '../utils/Registration_data_lets_sHop.js';

// test("Url_navigation & asseration on home page", async ({page})=>{ 
// // url navigation and asseration 
//     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
//    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');

// //test asseration Text Content , partial text
//    await expect(page.locator('.blink_me')).toHaveText("Register to sign in with your personal account");
//    await expect(page.locator('[href*="academy"]')).toContainText(" dummywebsite");

//    // element visible asseration 
//  await expect(page.locator('.title em')).toBeVisible();

//  //element length asseration 
//  await expect(page.locator('.title')).toHaveCount(7);

// // title asseration 
// await expect(page).toHaveTitle("Let's Shop");

// //Soft assertions do not stop the test on failure.
// //Test continues even if assertion fails. 
// await expect.soft(page.locator('[routerlink="/auth/register"]')).toBeVisible();

// //Negative Assertions 
// await expect(page.locator('#error')).not.toBeVisible();
// });

// test('login without credentials', async ({page}) =>{
// await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
// await page.locator('[id="login"]').click();
// //required message asserations 
// await expect(page.locator('.invalid-feedback').first()).toHaveText("*Email is required");
// await expect(page.locator('.invalid-feedback').last()).toHaveText("*Password is required");
// });

// test('invalid login', async({page}) => { 

// const user_Email = "Abc13@yopmail.com"
// const user_Password = "12345@Abcde"
// const invalidsign_in = new user_Login(page);
// await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
// invalidsign_in.invalid_login(user_Email,user_Password);
// await expect(page.locator('[role="alert"]')).toHaveText("Incorrect email or password.");

// });

// test('login', async ({page}) => {

//   const user_Email = "testtest5@gmail.com";
//   const user_Password = "Was@1234";
//   const Login = new user_Login(page);

//   await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

//   Login.valid_login(user_Email,user_Password);
// });

// test('Signup', async ({page})=> {
// await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

// // Sign up 
// await page.locator('[routerlink="/auth/register"]').click();
// await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/register')

// // all register *required field asserations 
// await page.locator('[type="submit"]').click();

// await expect(page.locator('div [class="invalid-feedback"]').nth(0)).toHaveText("*First Name is required");
// await expect(page.locator('div [class="invalid-feedback"]').nth(1)).toHaveText("*Email is required");
// await expect(page.locator('div [class="invalid-feedback"]').nth(2)).toHaveText("*Phone Number is required");
// await expect(page.locator('div [class="invalid-feedback"]').nth(3)).toHaveText("*Password is required");
// await expect(page.locator('div [class="invalid-feedback"]').nth(4)).toHaveText("Confirm Password is required");
// await expect(page.locator('[class="row mb-2"]').last()).toContainText('*Please check above checkbox');

// await page.reload();

// const firstName = generateFirstName(6);
// const lastName = generateLastName(4);
// const email = generateR_eMail();
// const Phone = generatePhoneNumber();
// const occupation = generateOccupation();
// const gender = selectGender();
// const User_Password = generatePassword();
// await page.locator('#firstName').fill(firstName);
// await page.locator('#lastName').fill(lastName);
// await page.locator('#userEmail').fill(email);
// await page.locator('#userMobile').fill(Phone);
// await page.locator('.custom-select').selectOption(occupation);
// await page.locator(`input[value="${gender}"]`).check();
// await page.locator('#userPassword').fill(User_Password);
// await page.locator('#confirmPassword').fill(User_Password);
// await page.locator('[type="checkbox"]').click();
// await page.locator('[value="Register"]').click();

// });

// test('child window using browser fixture', async ({browser})=> {

// const context = await browser.newContext();
// const page = await context.newPage();

// await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
// const childWindow = await page.locator('.blinkingText');

// const [newPagec] = await Promise.all ([
// context.waitForEvent('page'),
// childWindow.click(),
// ])
// const text2 = await newPagec.locator('.inner-box h1').textContent();
// console.log(text2);
// });


// test('child window using page fixture', async ({ page }) => {

//   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
//   const ChildWindow = await page.locator('.blinkingText');

//   const [newPagecW] = await Promise.all([
//     page.waitForEvent('popup'),
//    ChildWindow.click()
//   ]);

//   const text1 = await newPagecW.locator('.inner-box h1').textContent();

//   console.log(text1);

// });

// test.only('Asseration & element validation on dashboard page', async ({page}) => {

//  const user_Email = "testtest5@gmail.com";
//   const user_Password = "Was@1234";
//   const Login = new user_Login(page);
//   await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
//   await Login.valid_login(user_Email,user_Password);

//  await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");

//  await expect(page.locator('[class="py-2 border-bottom ml-3"] div[class*="star-inserted"]')).toHaveCount(8);
//  await expect(page.locator('[class="py-2 ml-3"] [type="checkbox"]')).toHaveCount(2);
// await expect(page.locator('[class="m-2 blink_me"]')).toHaveText(" User can only see maximum 9 products on a page");
// await expect(page.locator('[id="res"]')).toHaveText("Showing 3 results   | ");

// await expect(page.locator('[class="card"]')).toHaveCount(3);

// const titles = page.locator('[style="text-transform: uppercase;"]');
// const Count = await titles.count();

// for(let i=0; i<Count; i++){
//   const product_Names = await titles.nth(i).textContent();
//   console.log(product_Names);
// }

// //shoes 
// await page.locator('[class="btn w-40 rounded"]').first().click();
// await expect(page.locator('.border-product p')).toHaveText("Apple phone");
// await page.locator('.product-buttons [class*=btn-primary]').click({ force: true });
// //await expect(page.locator('[id="toast-container"]')).toHaveText("Product Added To Cart");
// await page.locator('[class="continue"]').click();

// // //Coat 
// await page.locator('[class="btn w-40 rounded"]').nth(1).click();
// await page.locator('.product-buttons [class*=btn-primary]').click({ force: true });
// await page.locator('[class="continue"]').click();
// await page.waitForTimeout(1000);

// //Iphone
// await page.locator('[class="btn w-40 rounded"]').last().click();
// await page.locator('.product-buttons [class*=btn-primary]').click({ force: true });
// await page.locator('[class="continue"]').click();
// await page.waitForTimeout(1000); 

// await page.locator('[routerlink="/dashboard/cart"]').click();
// await expect(page.locator('[class="heading cf"] h1')).toHaveText("My Cart");

// //shoes cart asserations 
// //await expect(page.locator('[class="itemNumber"]').first()).toHaveText('#6960eae1c941646b7a8b3ed3');
// await expect(page.locator('[class="cartSection"] h3').first()).toHaveText("ADIDAS ORIGINAL");
// await expect(page.locator('[class="stockStatus"]').first()).toHaveText(" In Stock");
// await expect(page.locator('[class="prodTotal cartSection"]').first()).toHaveText("$ 11500");

// // Zara Coat cart asserations 
// //await expect(page.locator('[class="itemNumber"]').nth(1)).toHaveText('#6960eac0c941646b7a8b3e68');
// await expect(page.locator('[class="cartSection"] h3').nth(1)).toHaveText("ZARA COAT 3");
// await expect(page.locator('[class="stockStatus"]').nth(1)).toHaveText(" In Stock");
// await expect(page.locator('[class="prodTotal cartSection"]').nth(1)).toHaveText("$ 11500");

// //Iphone

// //await expect(page.locator('[class="itemNumber"]').nth(2)).toHaveText('#6960ea76c941646b7a8b3dd5');
// await expect(page.locator('[class="cartSection"] h3').nth(2)).toHaveText("iphone 13 pro");
// await expect(page.locator('[class="stockStatus"]').nth(2)).toHaveText(" In Stock");
// await expect(page.locator('[class="prodTotal cartSection"]').nth(2)).toHaveText("$ 55000");

// await page.locator('[class="btn btn-primary"]').nth(1).click();

// //Payment(page);
// await  page.locator('[class="field small"]').nth(1).fill("777");
// await page.locator('[class="field"]').last().fill("testUser");

// await page.locator('[placeholder="Select Country"]').pressSequentially('ind',{delay:100});
// const dropDown = await page.locator('[class*=.ta-results]');
// await dropDown.waitFor();
// const Count_A = await dropDown.locator('.ta-item').count();
// for(let i=0; i<Count_A; i++){

//     const dropDownText = await dropDown.locator('.ta-item').nth(i).textContent();
//     if(text === " India"){
// await dropDown.locator('.ta-item').nth(i).click();
//     }
//   }

// });



















