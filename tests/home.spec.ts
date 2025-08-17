import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.shirttuning.sk/');

  await expect(page.locator('#header').getByRole('link', { name: 'Go to Home page' })).toBeVisible();
});