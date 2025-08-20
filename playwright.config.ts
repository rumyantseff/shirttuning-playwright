import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
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
      use: { 
        ...devices['Desktop Chrome'], 
        baseURL: 'https://www.shirttuning.sk/' 
      },
    },
    {
      name: 'chromium-shirttuning-cz',
      use: { 
        ...devices['Desktop Chrome'], 
        baseURL: 'https://www.shirttuning.cz/' 
      },
    },
    {
      name: 'chromium-shirttuning-de',
      use: { 
        ...devices['Desktop Chrome'], 
        baseURL: 'https://www.shirttuning.de/' 
      },
    },
    {
      name: 'chromium-shirttuning-nl',
      use: { 
        ...devices['Desktop Chrome'], 
        baseURL: 'https://www.shirttuning.nl/' 
      },
    },
    {
      name: 'chromium-shirttuning-it',
      use: { 
        ...devices['Desktop Chrome'], 
        baseURL: 'https://www.shirttuning.it/' 
      },
    },

    // // ---- Firefox ----
    // {
    //   name: 'firefox-shirttuning-sk',
    //   use: { ...devices['Desktop Firefox'], baseURL: 'https://www.shirttuning.sk/' },
    // },
    // {
    //   name: 'firefox-shirttuning-cz',
    //   use: { ...devices['Desktop Firefox'], baseURL: 'https://www.shirttuning.cz/' },
    // },
    // {
    //   name: 'firefox-shirttuning-de',
    //   use: { ...devices['Desktop Firefox'], baseURL: 'https://www.shirttuning.de/' },
    // },
    // {
    //   name: 'firefox-shirttuning-nl',
    //   use: { ...devices['Desktop Firefox'], baseURL: 'https://www.shirttuning.nl/' },
    // },
    // {
    //   name: 'firefox-shirttuning-it',
    //   use: { ...devices['Desktop Firefox'], baseURL: 'https://www.shirttuning.it/' },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
