import { test } from '@playwright/test';
import { goToCreatorFlow, configureProductFlow } from '../../flows/shirttuningFlow';

test.describe('Shirttuning - E2E Flow', () => {
  test('Full product configuration and add to cart', async ({ page, baseURL }) => {
    // 1️⃣ Home Page
    await goToCreatorFlow(page, baseURL!);

    // 2️⃣ Product Page
    await configureProductFlow(page, baseURL!);

    // 3️⃣ Cart Page
  });
});
