const {test, expect} = require('@playwright/test')


test.only("Web elements Practice", async ({page})=>{

    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

    //Add customer
    await page.locator('[ng-click="manager()"]').click();
    await page.locator('[ng-click="addCust()"]').click();
    await page.locator('[placeholder="First Name"]').fill("Dhurandhar")
    await page.locator('[placeholder="Last Name"]').fill("Reveng");
    await page.locator('[placeholder="Post Code"]').fill("201019");
    await page.locator('[type="submit"]').click();
    await page.locator('[type="submit"]').screenshot({path:'partialss.png'});
    await page.locator('[type="submit"]').screenshot({path:'screenshot/submitbutton.png'});
    
    await  page.on('dialog', dialog=> dialog.accept());
 
    //open account 
    await page.locator('[ng-click="openAccount()"]').click();
    await page.locator('#userSelect').selectOption('6');
    await page.locator('#currency').selectOption("Pound");
    await page.locator('[type="submit"]').click();
    await page.on('dialog', dialog=> dialog.accept());
  
    // extracting the data from web table
    await page.locator('[ng-click="showCust()"]').click();
   const rows = page.locator('table tbody tr');
const count = await rows.count();

for (let i = 0; i < count; i++) {
    const row = rows.nth(i);
    const name = await row.locator('td').nth(0).textContent();

    if (name.includes('Dhurandhar')) {
        const fullRow = await row.textContent();
        console.log(fullRow);
        break;
    }
}
})
//const row = page.locator('table tbody tr', { hasText: 'Dhurandhar' });
//console.log(await row.textContent());
// test('Delete customer and verify removal', async ({ page }) => {

//     // go to customers list
// await page.locator('[ng-click="showCust()"]').click();

// // wait for row
// const row = page.locator('table tbody tr', { hasText: 'Ron' });
// await expect(row).toBeVisible();

// // delete
// await row.getByRole('button', { name: 'Delete' }).click();

// // verify deletion
// await expect(row).toHaveCount(0);
// });