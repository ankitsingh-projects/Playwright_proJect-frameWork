const {test,expect} = require('@playwright/test');
const {user_Login} = require('../POM/login.js');
import { 
  generateFirstName, 
  generateLastName, 
  generateR_eMail,
  generatePhoneNumber,
  generateOccupation,
  selectGender,
  generatePassword
} from '../utils/Registration_data_lets_sHop.js';

test('Signup', async ({page})=> {
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.locator('[routerlink="/auth/register"]').click();

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
//await page.pause();
await page.locator('[routerlink="/auth"]').toBeVisible().click({force:true});
await page.waitForURL('**/auth/login');

const Login = new user_Login(page);
await Login.valid_login(email,User_Password);

});

//signup page required field error asseration 
test('signup page asserations', async ({page})=>{
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
});