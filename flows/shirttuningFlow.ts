import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { getLangFromBaseURL } from '../utils/translations';

export async function goToCreatorFlow(page: Page, baseURL: string) {
  const homePage = new HomePage(page, baseURL);
  await homePage.goto(baseURL);
  await homePage.assertLogoVisible();
  await homePage.acceptCookies();
  await homePage.goToCreator();
}

export async function configureProductFlow(page: Page, baseURL: string) {
  const productPage = new ProductPage(page);
  const lang = getLangFromBaseURL(baseURL);

  await page.waitForURL(
    /bc-tricko-panske.html|bc-tricko-panske.html|bc-e190-t-shirt-herren.html|e190-t-shirt.html|bc-190-maglietta-uomo.html/i
  );

  await productPage.assertProductTitleVisibleAndCorrect(lang);
  await productPage.selectRandomColor();
  await productPage.selectRandomMotive();
  await productPage.assertSelectedMotive();
  await productPage.addToCart();
}
