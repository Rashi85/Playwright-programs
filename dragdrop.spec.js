import { test, expect } from '@playwright/test';

test('drag drop demo', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');

  // Expect a title "to contain" a substring.
 const pageIframe = await page.frameLocator("//*[@id = 'content']/iframe");
 const toDrag = await pageIframe.locator("//*[@id = 'draggable']");
 const toDrop = await pageIframe.locator("//*[@id = 'droppable']");
 await toDrag.dragTo(toDrop);

});

test('keyboard action demo', async ({ page }) => {

await page.goto('https://textbox.johnjago.com/');
await page.locator("//textarea").pressSequentially("Rashi TCS Selenium automation batch",{delay:200});
await page.locator("//textarea").press("Control+A");
await page.locator("//textarea").press("Backspace");

await page.keyboard.type('Hello world');
await page.keyboard.press('ArrowLeft');
await page.keyboard.down('Shift');
for(let i=0;i<'world'.length;i++)
    await page.keyboard.press('ArrowLeft');
await page.keyboard.down('Shift');

await page.keyboard.press('Backspace');
});



