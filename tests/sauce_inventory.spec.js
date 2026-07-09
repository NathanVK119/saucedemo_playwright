import { test, expect } from '@playwright/test';
//Inventory page tests for SauceDemo Website
test('Add item to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
    //click add to cart button for the first item
    await page.locator('[data-test="inventory-list"]').locator('[data-test="inventory-item"]').locator('button').nth(0).click();
    //click add to cart button for the third item
    await page.locator('[data-test="inventory-list"]').locator('[data-test="inventory-item"]').locator('button').nth(2).click();
});
test('Add and Remove item from cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    //click add to cart button for the first item
    await page.locator('[data-test="inventory-list"]').locator('[data-test="inventory-item"]').locator('button').nth(0).click();
    //click add to cart button for the third item
    await page.locator('[data-test="inventory-list"]').locator('[data-test="inventory-item"]').locator('button').nth(2).click();
    //click the button again to remove the first item from the cart
    await page.locator('[data-test="inventory-list"]').locator('[data-test="inventory-item"]').locator('button').nth(0).click();
});