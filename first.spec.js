const {test,expect} = require('@playwright/test')
test('My first test case',async ({page})=>{
await page.goto('https://google.com')
await expect(page).toHaveTitle('Google')
})