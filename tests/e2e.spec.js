import { test, expect } from '@playwright/test';
//End to End Testing for SauceDemo Website
//From Login to Checkout
test('Testing', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    
    //fill username
    await page.locator('[data-test="username"]').fill('standard_user');
    //fill password
    await page.locator('[data-test="password"]').fill('secret_sauce');
    //click login button
    await page.locator('[data-test="login-button"]').click();
    //click add to cart button for the first and third item
    await page.locator('[data-test="inventory-list"]').locator('[data-test="inventory-item"]').locator('button').nth(2).click();
    await page.locator('[data-test="inventory-list"]').locator('[data-test="inventory-item"]').locator('button').nth(0).click();
    //click shopping cart link
    await page.locator('[data-test="shopping-cart-link"]').click();
    //remove the first item from the cart
    await page.locator('[data-test="inventory-item"]').locator('button').nth(0).click();
    //click checkout button
    await page.locator('[data-test="checkout"]').click();
    //fill in the checkout information
    await page.locator('[data-test="firstName"]').fill('Nathan');
    await page.locator('[data-test="lastName"]').fill('Sai');
    await page.locator('[data-test="postalCode"]').fill('5104');
    //click continue button
    await page.locator('[data-test="continue"]').click();
    //click finish button
    await page.locator('[data-test="finish"]').click();
});