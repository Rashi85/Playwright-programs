const { test, expect } = require('@playwright/test');

test('iframe example on w3schools', async ({ page }) => {
  await page.goto(
    'https://www.w3schools.com/tags/tryit.asp?
    filename=tryhtml_button_test'
  );
  // Switch to iframe
  const iframe = page.frameLocator('#iframeResult');
  // Click button inside iframe
  await iframe.locator('button').click(); 

  page.on('dialog', dialog => {
    expect(dialog.message()).toContain('Hello');
    dialog.accept();
  });
});

test('iframe using page.frame()', async ({ page }) => {
  await page.goto(
    'https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_test'
  );

  // Wait for iframe
  await page.waitForSelector('#iframeResult');
  const frame = page.frame({ url: /tryhtml_button_test/ });
  await frame.click('button');

  page.on('dialog', dialog => dialog.accept());
});

