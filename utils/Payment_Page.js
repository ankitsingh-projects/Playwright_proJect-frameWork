export async function Payment(page) {
 await page.locator('[placeholder="Select Country"]').click();
await page.locator('[placeholder="Select Country"]').fill('ind');

await page.locator('.ta-results').waitFor();

await page.locator('.ta-results button')
  .filter({ hasText: 'India' })
  .click();
}


