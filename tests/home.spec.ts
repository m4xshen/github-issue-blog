import { test, expect } from '@playwright/test';

test('have site title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Daniel's Blog/);
});

test('link to detail page with same title', async ({ page }) => {
  await page.goto('/');
  const firstPost = page.locator('a >> h1').first();
  const postTitleHome = await firstPost.innerText();

  await firstPost.click();
  const postTitleDetail = await page.locator('h1').first().innerText();

  expect(postTitleHome).toEqual(postTitleDetail);
});
