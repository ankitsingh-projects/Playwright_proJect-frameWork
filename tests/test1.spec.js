const {test,expect}= require('@playwright/test')

test('handle delay button', async ({page,context})=>{

await page.goto('https://www.leafground.com/window.xhtml;jsessionid=node0bnnebigwxzlw7rc3t3wxbiwf13962394.node0');

const [newPage] = await Promise.all([
    context.waitForEvent('page'),   // listen for new tab
    page.click('text=Open with delay',{delay:100})
  ]);
   await newPage.waitForLoadState();
  console.log(await newPage.title());
});



