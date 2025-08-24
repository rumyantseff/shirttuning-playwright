import { Page, Locator, expect } from '@playwright/test';
import translations from '../i18n/translations.json';

export class ProductPage {
  readonly page: Page;
  readonly lang: string;
  readonly productTitle: Locator;
  readonly addColorBtn: Locator;
  readonly colorList: Locator;
  readonly addMotiveBtn: Locator;
  readonly motiveList: Locator;
  readonly addToCartBtn: Locator;

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
    
    // this.addToCartBtn = page.locator('g').filter({ hasText: /^10,90 €Cena vrátane DPH, bez poštovnéhoVyber množstvo a veľkosťZdieľaj a ulož$/ }).locator('rect').nth(2)
  }
  
  async assertProductTitleVisibleAndCorrect(language: keyof typeof translations) {
    const expectedText = translations[language].product.name;

    await expect(this.productTitle).toBeVisible();
    await expect(this.productTitle).toHaveText(expectedText);
  }

  private async selectRandom(locator: Locator, label: string) {
    await locator.first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {
      throw new Error(`❌ ${label} options did not appear in time!`);
    });

    const count = await locator.count();
    if (count === 0) {
      throw new Error(`❌ No options found for ${label}!`);
    }

    const randomIndex = Math.floor(Math.random() * count);
    const option = locator.nth(randomIndex);

    // log pre debug
    const html = await option.evaluate(el => el.outerHTML).catch(() => 'n/a');
    console.log(`👉 Selected random ${label} index: ${randomIndex}, element: ${html}`);

    await option.click({ force: true });
  }

  async selectRandomColor() { 
    await this.addColorBtn.click();
    await this.selectRandom(this.colorList, 'color'); 
  } 
  
  async selectRandomMotive() { 
    await this.addMotiveBtn.click();
    await this.motiveList.first().waitFor({ state: 'visible', timeout: 5000 });
    await this.selectRandom(this.motiveList, 'motive'); 
  }
}
