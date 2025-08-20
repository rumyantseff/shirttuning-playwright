import { Page, Locator, expect } from '@playwright/test';
import { getLangFromBaseURL, t } from '../utils/translations';

export class HomePage {
  readonly page: Page;
  readonly lang: string;
  readonly logo: Locator;
  readonly allowAllCookiesButton: Locator
  readonly creatorLink: Locator;

  constructor(page: Page, baseURL: string) {
    this.page = page;

    const lang = getLangFromBaseURL(baseURL);
    const translate = t(lang);

    this.allowAllCookiesButton = page.getByRole('button', { name: translate.cookies.acceptAll });

    this.logo = page.locator('#header');

    this.creatorLink = page.getByRole('link', { name: translate.nav.creator, exact: true });
  }

  async goto(baseURL: string) {
    await this.page.goto(baseURL);
  }

  async acceptCookies() {
    if (await this.allowAllCookiesButton.isVisible()) {
      await this.allowAllCookiesButton.click();
    }
  }

  async assertLogoVisible() {
    await expect(this.logo).toBeVisible();
  }

  async goToCreator() {
    await this.creatorLink.click();
  }
}
