// my-test.spec.js
import { test, expect } from '@playwright/test';

test('should handle a basic alert and verify its message', async ({ page }) => {
  // 1. Register a dialog handler BEFORE the action that triggers the alert
  page.on('dialog', async dialog => {
    
    console.log(`Alert message: ${dialog.message()}`);    
    expect(dialog.message()).toContain('I am an alert box!');    
    await dialog.accept();
  });

  await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
  
  await page.locator('#alertexamples').click();

  // The 'dialog' event listener above will execute automatically when the alert appears.
});
