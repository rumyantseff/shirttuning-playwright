import { Page, Locator, expect } from '@playwright/test';
import translations from '../i18n/translations.json';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly addColorBtn: Locator;
  readonly colorList: Locator;
  readonly addMotiveBtn: Locator;
  readonly motiveList: Locator;
  readonly selectedMotive: Locator;
  readonly addToCartBtn: Locator;
  readonly confirmAddingToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productTitle = page.locator(
      '#stage > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(2) > g:nth-child(2) > g:nth-child(3) > g:nth-child(1) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2)'
    ).first();

    this.addColorBtn = page.locator('g:nth-child(4) > g > g:nth-child(2) > g > rect').first();

    this.colorList = page.locator(
      '#stage > g:nth-child(3) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(1) > *'
    );

    this.addMotiveBtn = page.locator('g:nth-child(3) > g > g > g:nth-child(2) > g > g > rect').first();

    this.motiveList = page.locator(
      '#stage > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(13) > g:nth-child(1) > g:nth-child(4) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(3) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1)'
    );

    this.selectedMotive = page.locator('g:nth-child(6) > g > rect').first();

    this.addToCartBtn = page.getByRole('button', { name: 'sp_creator_sizeAndAmountButton' }).first();

    this.confirmAddingToCartBtn = page.locator('g:nth-child(9) > g > g:nth-child(2) > g > use').first();
  }

  async assertProductTitleVisibleAndCorrect(language: keyof typeof translations) {
    const expectedText = translations[language].product.name;
    await expect(this.productTitle).toBeVisible();
    await expect(this.productTitle).toHaveText(expectedText);
  }

  private async selectRandom(locator: Locator, label: string) {
    const count = await locator.count();
    if (count === 0) {
      throw new Error(`❌ No options found for ${label}!`);
    }

    const randomIndex = Math.floor(Math.random() * count);
    const option = locator.nth(randomIndex);

    console.log(`Selected random ${label} index: ${randomIndex}`);
    await option.click({ force: true });
  }

  async selectRandomColor() {
    await this.addColorBtn.click();
    await this.selectRandom(this.colorList, 'color');
  }

  async selectRandomMotive() {
    await this.addMotiveBtn.click();
    const motiveOptions = this.motiveList.locator('> g');
    await this.selectRandom(motiveOptions, 'motive');
  }

  async assertSelectedMotive() {
    await expect(this.selectedMotive).toBeVisible();
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }

  async confirmAdding() {
    await this.confirmAddingToCartBtn.click();
  }
}
