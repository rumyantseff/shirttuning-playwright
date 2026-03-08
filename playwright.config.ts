import { defineConfig, devices } from '@playwright/test';
import { environments } from './config/environments';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },

  projects: [
    // ---- Chrome ----
    {
      name: 'chromium-shirttuning-sk',
      use: { ...devices['Desktop Chrome'], baseURL: environments.sk },
    },
    {
      name: 'chromium-shirttuning-cz',
      use: { ...devices['Desktop Chrome'], baseURL: environments.cz },
    },
    {
      name: 'chromium-shirttuning-de',
      use: { ...devices['Desktop Chrome'], baseURL: environments.de },
    },
    {
      name: 'chromium-shirttuning-nl',
      use: { ...devices['Desktop Chrome'], baseURL: environments.nl },
    },
    {
      name: 'chromium-shirttuning-it',
      use: { ...devices['Desktop Chrome'], baseURL: environments.it },
    },

    // // ---- Firefox ----
    // { name: 'firefox-shirttuning-sk', use: { ...devices['Desktop Firefox'], baseURL: environments.sk } },
    // { name: 'firefox-shirttuning-cz', use: { ...devices['Desktop Firefox'], baseURL: environments.cz } },
    // { name: 'firefox-shirttuning-de', use: { ...devices['Desktop Firefox'], baseURL: environments.de } },
    // { name: 'firefox-shirttuning-nl', use: { ...devices['Desktop Firefox'], baseURL: environments.nl } },
    // { name: 'firefox-shirttuning-it', use: { ...devices['Desktop Firefox'], baseURL: environments.it } },
  ],
});
