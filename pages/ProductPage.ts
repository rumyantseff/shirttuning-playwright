import { Page, Locator, expect } from '@playwright/test';
import translations from '../i18n/translations.json';

export class ProductPage {
  readonly page: Page;
  readonly lang: string;
  readonly productTitle: Locator;
  readonly color: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('#stage > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(2) > g:nth-child(2) > g:nth-child(3) > g:nth-child(1) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2)').first();
    this.color = page.locator('#stage > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(2) > g:nth-child(2) > g:nth-child(4) > g:nth-child(1) > g:nth-child(2) > g:nth-child(1) > g:nth-child(2)')
  }

  // async goto(baseURL: string) {
  //   await this.page.goto(this.page.url()); 
  // }
  
  async assertProductTitleVisibleAndCorrect(language: keyof typeof translations) {
    const expectedText = translations[language].product.name;

    await expect(this.productTitle).toBeVisible();
    await expect(this.productTitle).toHaveText(expectedText);
  }

  async chooseProductColor() {
    // await expect(this.color).toBeVisible();
    this.color.click();
  }
}
