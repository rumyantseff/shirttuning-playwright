import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test.describe('Shirttuning - Live Testing', () => {
  test('Home Page testing', async ({ page, baseURL }) => {
    const homePage = new HomePage(page, baseURL!);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.goto(baseURL!);
    await homePage.assertLogoVisible();
    await homePage.acceptCookies();
    await homePage.goToCreator();

    await page.waitForURL(
      /bc-tricko-panske.html|bc-tricko-panske.html|bc-e190-t-shirt-herren.html|e190-t-shirt.html|bc-190-maglietta-uomo.html/i
    );

    // await productPage.assertOnProductPage();
    // await productPage.addToCart();

    // // Prejdi do košíka
    // await page.click('a[href*="cart"], a[href*="kosik"], a[href*="warenkorb"]');

    // await cartPage.assertCartHasItems();
  });
});
