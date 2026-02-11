import { test, expect } from '@playwright/test';

test('getByRole locator demo', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
  
    await page.getByRole("link",{name:"Forgot login info?"}).click()
})

test('getByText locator demo', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.getByText('Forgot login info?').click()
})

test('getByLabel locator demo', async ({ page }) => {
    await page.goto('https://login.salesforce.com/')
    await page.getByLabel('username').fill('rashi')




})

test('getByPlaceholder locator demo', async ({ page }) => {
    await page.goto('https://Amazon.in/')
    await page.getByPlaceholder('Search Amazon.in').fill('phone')


})

test('getByText1 locator demo', async ({ page }) => {
    await page.goto('https://Amazon.in/')
    await expect(page.getByText('Revamp your home in style')).toBeVisible();
    page.close();


})

test('getByAlt demo', async ({ page }) => {
    await page.goto('https://bookswagon.com/')
    await page.getByText('Award Winners').click();
    await page.getByPlaceholder('Search by Title, Author, Publisher or ISBN').fill('fiction');
    await page.locator("xpath=//*[@name='btnTopSearch']").click();
    await page.getByAltText('Sacred Waters').click();
    


})

test('getBytitle demo', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole("link",{name:"Forgot login info?"}).click();
    await page.getByTitle("ParaBank").click();


})


