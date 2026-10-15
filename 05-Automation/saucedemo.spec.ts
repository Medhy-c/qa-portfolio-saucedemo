import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { users, checkoutInfo } from './data/users';

test.describe('SauceDemo - Tests avec Page Object Model + Data Driven', () => {

  test('TC-AUTO-001 : Connexion réussie avec standard_user', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto(); 
    await loginPage.login(users.standard.username, users.standard.password); 
    await inventoryPage.expectToBeOnInventoryPage(); 
  });

  
  test('TC-AUTO-002 : Connexion échouée avec locked_out_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.locked.username, users.locked.password);
    
    
    await loginPage.expectErrorMessage('Sorry, this user has been locked out');
  });

 
  test('TC-AUTO-003 : Parcours complet - Login → Panier → Checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectToBeOnInventoryPage();

    
    await inventoryPage.addProductToCart('add-to-cart-sauce-labs-backpack');
    await inventoryPage.expectCartBadgeCount('1'); 

   
    await inventoryPage.goToCart();
    await cartPage.expectToBeOnCartPage();

    
    await cartPage.proceedToCheckout();
    await checkoutPage.fillInformation(
      checkoutInfo.valid.firstName,
      checkoutInfo.valid.lastName,
      checkoutInfo.valid.postalCode
    );
    await checkoutPage.expectToBeOnOverviewPage();
    await checkoutPage.finishCheckout();
    await checkoutPage.expectOrderComplete();
  });

  
test('TC-AUTO-004 : La page Inventory affiche 6 produits', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  // On vérifie d'abord qu'on est bien sur la bonne page
  await inventoryPage.expectToBeOnInventoryPage();

  // Ensuite on compte les produits
  const productCount = await inventoryPage.getProductCount();
  
  console.log('Nombre de produits trouvés :', productCount);
  expect(productCount).toBe(6);
});

 
test('TC-AUTO-005 : Tri des produits par nom (A to Z)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await inventoryPage.expectToBeOnInventoryPage();

  
  await inventoryPage.sortBy('az');

  
  const productNames = await inventoryPage.getProductNames();

  
  console.log('Produits après tri A-Z :', productNames);

  
  expect(productNames[0]).toBe('Sauce Labs Backpack');

  
  expect(productNames[5]).toBe('Test.allTheThings() T-Shirt (Red)');

  
  const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));
  expect(productNames).toEqual(sortedNames);
});

});