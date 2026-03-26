export async function Payment(page) {
  const countryInput = page.locator('[placeholder="Select Country"]');
  await countryInput.click();
  await countryInput.pressSequentially('ind', { delay: 100 });

  const dropdown = page.locator('.ta-results');
  await dropdown.waitFor({ state: 'visible' });

  await dropdown.locator('button', { hasText: 'India' }).click();
}


