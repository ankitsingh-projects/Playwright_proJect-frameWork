const {test,expect} = require('@playwright/test');

test.only("Add to Kart", async ({page})=>{
//e2e flow for add to kart to proceed 
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.locator('[type="search"]').fill('ca');
    await page.getByText('ADD TO CART').nth(1).click();
    await page.getByText('ADD TO CART').first().click();
    await page.getByText('ADD TO CART').last().click();
    console.log( await page.locator('div h4').allTextContents()); 
    await page.locator('[alt="Cart"]').click();
    await page.locator('[alt="Cart"]').click();
    await page.locator('[type="search"]').fill('');                                                               
    await page.locator('[type="search"]').fill('almonds');
    await page.waitForTimeout(2000); 
    await page.locator("text=ADD TO CART").click();

    await page.locator('[alt="Cart"]').click(); 
    await page.locator('text=PROCEED TO CHECKOUT').click();
    await page.locator('text=Place Order').click(); 
    await page.locator('div select').selectOption("India");
    await page.locator('text=Proceed').click();
    await expect(page.locator('.errorAlert')).toHaveText('Please accept Terms & Conditions - Required')
    await page.locator('[type="checkbox"]').click();
    await page.locator('text=Proceed').click();
    await expect(page.locator('div .brand')).toHaveText('GREENKART');
    await page.pause();


});

 test("AutomationPractice", async ({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

// handling radio button with asseration 
await page.locator('[value="radio1"]').click();
await expect(page.locator('[value="radio1"]')).toBeChecked();
await page.locator('[value="radio1"]').click();
await page.locator('[value="radio2"]').click();
await expect(page.locator('[value="radio2"]')).toBeChecked();
await page.locator('[value="radio3"]').click();
console.log(await page.locator('[value="radio3"]').isChecked());

// handling the static dropdown 
await page.locator('[id="dropdown-class-example"]').selectOption('option1');
await page.locator('[id="dropdown-class-example"]').selectOption('option2');
await page.locator('[id="dropdown-class-example"]').selectOption('option3');


// handling the dynamic dropdown 
await page.locator('[placeholder*="Countries"]').pressSequentially('ind',{delay:100});
const dropDownD = page.locator('[id="ui-id-1"]');
await dropDownD.waitFor();
const countS = dropDownD.locator('li div').count();


for ( let i=0; i<countS, ++i;){
 const    text = await dropDownD.locator("li div").nth(i).textContent();
    if (text === "India"){
        await dropDownD.locator("li div").nth(i).click()
    break;
   }
}

 })


 




  