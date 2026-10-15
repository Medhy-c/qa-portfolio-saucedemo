import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async expectToBeOnInventoryPage() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCart(productTestId: string) {
    await this.page.locator(`[data-test="${productTestId}"]`).click();
  }

  async expectCartBadgeCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  async goToCart() {
    await this.cartLink.click();
  }

async getProductCount() {
  
  await this.page.waitForSelector('.inventory_item', { state: 'visible', timeout: 10000 });
  
  
  return await this.page.locator('.inventory_item').count();
}

  async sortBy(option: string) {
    await this.page.locator('[data-test="product-sort-container"]').selectOption(option);
  }

  async removeProductFromCart(productTestId: string) {
    
    await this.page.locator(`[data-test="${productTestId}"]`).click();
  }
  

async getProductNames(): Promise<string[]> {
 
  const productNameLocators = this.page.locator('.inventory_item_name');
  
  
  await productNameLocators.first().waitFor({ state: 'visible' });
  
  
  return await productNameLocators.allTextContents();
}

}