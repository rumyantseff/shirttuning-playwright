import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('a.checkout-button, button[name="proceed"], .wc-proceed-to-checkout a');
  }

  async assertCartHasItems() {
    await expect(this.cartItems.first()).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
