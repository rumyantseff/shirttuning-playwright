import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { getLangFromBaseURL, t } from '../utils/translations';

test.describe('Shirttuning - Live Testing', () => {
  test('Home Page testing', async ({ page, baseURL }) => {
    const homePage = new HomePage(page, baseURL!);
    const productPage = new ProductPage(page);
    // const cartPage = new CartPage(page, baseURL!);

    // -----------------------------
    // 1️⃣ Home Page
    // -----------------------------
    await homePage.goto(baseURL!);
    await homePage.assertLogoVisible();
    await homePage.acceptCookies();
    await homePage.goToCreator();



    // -----------------------------
    // 2️⃣ Product Page
    // -----------------------------
    await page.waitForURL(
      /bc-tricko-panske.html|bc-tricko-panske.html|bc-e190-t-shirt-herren.html|e190-t-shirt.html|bc-190-maglietta-uomo.html/i
    );

    const currentLang = getLangFromBaseURL(baseURL);
    await productPage.assertProductTitleVisibleAndCorrect(currentLang);

    await productPage.selectRandomColor();

    await productPage.selectRandomMotive();


    await productPage.assertSelectedMotive();
    
    


    // -----------------------------
    // 3️⃣ Cart Page
    // -----------------------------
  });
});
