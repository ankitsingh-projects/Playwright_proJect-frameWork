//  To fetch username/password from UI fields in OrangeHRM
//  and reuse them for login in Playwright, you’re essentially doing read → store → reuse.

const { test, expect } = require('@playwright/test');

test('Fetch credentials and login', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Fetch username text
  const usernameText = await page.locator('//p[contains(text(),"Username")]').textContent();
  const passwordText = await page.locator('//p[contains(text(),"Password")]').textContent();

  // Extract actual values
  const username = usernameText.split(':')[1].trim();
  const password = passwordText.split(':')[1].trim();

  console.log(username, password);

  // Perform login
  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);

  await page.locator('button[type="submit"]').click();

  // Assertion
  await expect(page).toHaveURL(/dashboard/);
});