import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async expectToBeOnCartPage() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}