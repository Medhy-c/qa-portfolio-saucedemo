import { test, expect } from '@playwright/test';

test.describe('SauceDemo - Tests critiques', () => {

  test('TC-AUTO-001 : Connexion réussie avec standard_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC-AUTO-002 : Connexion échouée avec locked_out_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('#user-name').fill('locked_out_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out');
  });

  test('TC-AUTO-003 : Parcours complet - Ajout panier + Checkout', async ({ page }) => {
    // 1. Login
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // 2. Ajouter un produit au panier
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 3. Aller dans le panier
    await page.locator('.shopping_cart_link').click();
    await expect(page.locator('.title')).toHaveText('Your Cart');

    // 4. Checkout
    await page.locator('[data-test="checkout"]').click();

    // 5. Remplir les informations
    await page.locator('[data-test="firstName"]').fill('Medhy');
    await page.locator('[data-test="lastName"]').fill('QA');
    await page.locator('[data-test="postalCode"]').fill('59000');
    await page.locator('[data-test="continue"]').click();

    // 6. Vérifier la page Overview et finaliser
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');
    await page.locator('[data-test="finish"]').click();

    // 7. Vérifier la page de confirmation
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

});