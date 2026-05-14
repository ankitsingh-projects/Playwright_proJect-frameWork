export async function Payment(page) {
 await page.locator('[placeholder="Select Country"]').pressSequentially('ind',{delay:100});
const dropdown = await page.locator(".ta-results")
await dropdown.waitFor();
const optionCount = await dropdown.locator('button').count();
for(let i=0; i<optionCount; i++){
const text = await dropdown.locator('button').nth(i).textContent();
if(text === "India"){
await dropdown.locator('button').nth(i).click();
await page.locator('a[class*=action__submit]').click();
}
}}


// await page.locator('[placeholder="Select Country"]').pressSequentially('ind',{delay:100});
// const dropdown = await page.locator(".ta-results")
// await dropdown.waitFor();
// const optionCount = await dropdown.locator('button').count();
// for(let i=0; i<optionCount; i++){
// const text = await dropdown.locator('button').nth(i).textContent();
// if(text === "India"){
// await dropdown.locator('button').nth(i).click();
// await page.locator('a[class*=action__submit]').click();