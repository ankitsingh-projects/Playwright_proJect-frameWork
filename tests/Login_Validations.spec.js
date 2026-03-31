const {test,expect} = require('@playwright/test');
const {user_Login} = require('../POM/login.js');

async function login(page){
  const user_Email = "testtest5@gmail.com";
  const user_Password = "Was@1234";
  const Login = new user_Login(page);
  Login.valid_login(user_Email,user_Password);
}

//login without credentials error messages 
test('login without credentials', async ({page}) =>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.locator('[id="login"]').click();
//required message asserations 
await expect(page.locator('.invalid-feedback').first()).toHaveText("*Email is required");
await expect(page.locator('.invalid-feedback').last()).toHaveText("*Password is required");
});

//invalid login
test('invalid login', async({page}) => { 
const user_Email = "Abc13@yopmail.com"
const user_Password = "12345@Abcde"
const invalidsign_in = new user_Login(page);
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
invalidsign_in.invalid_login(user_Email,user_Password);
await expect(page.locator('[role="alert"]')).toHaveText("Incorrect email or password.");
});

// valid login
test('login', async ({page}) => {
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
login(page);
});