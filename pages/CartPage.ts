import { Page, Locator, expect } from '@playwright/test';
import { getLangFromBaseURL, t } from '../utils/translations';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page, baseURL: string) {
    this.page = page;
    const lang = getLangFromBaseURL(baseURL);
    const translate = t(lang);
    
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
