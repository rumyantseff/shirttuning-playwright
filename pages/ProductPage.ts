import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.productTitle = page.locator('h1.product_title, h1.entry-title');
    // this.addToCartButton = page.locator('button[name="add-to-cart"], .add_to_cart_button');
  }

  async goto(baseURL: string) {
    await this.page.goto(baseURL);
  }

  // async addToCart() {
  //   await this.addToCartButton.first().click();
  // }
}
