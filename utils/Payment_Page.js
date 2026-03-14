export async function Payment(page){
await  page.locator('[type="text"]').nth(1).fill("777",{ force: true });
await page.locator('[type="text"]').nth(2).fill("testuser",{ force: true });

await page.locator('[placeholder="Select Country"]').pressSequentially('ind',{delay:100});
const dropDown = await page.locator('[class*="ta-results"]');
await dropDown.waitFor();
const Count_A = await dropDown.locator('[class*="ta-item"]').count();
for(let i=0; i<Count_A; i++){

    const dropDownText = await dropDown.locator('[class*="ta-item"]').nth(i).textContent();
    if(dropDownText.trim() === "India"){
await dropDown.locator('[class*="ta-item"]').nth(i).click();
break;
    }
  }
}
