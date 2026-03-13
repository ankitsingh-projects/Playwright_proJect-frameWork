export async function Payment(page){

//await  expect(page.locator('[class="icon icon-credit-card"]')).toHavetext("Credit Card");
await  page.locator('[class="field small"]').nth(1).fill("777");
await page.locator('[class="field"]').last().fill("testUser")

await page.locator('[placeholder="Select Country"]').pressSequentially('ind',{delay:100});
const dropDown = await page.locator('[class*=.ta-results]')
await dropDown.waitFor();
const Count = await dropDown.locator('.ta-item').count();
for(let i=0; i<Count; i++){

    const dropDownText = await dropDown.locator('.ta-item').nth(i).textContent();
    if(text === " India"){
await dropDown.locator('.ta-item').nth(i).click();

}
}
}