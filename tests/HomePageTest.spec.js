const { test, expect } = require('@playwright/test')

test('Home page', async ({ page }) => {
    await page.goto('https://demoblaze.com/')
    const pageURL = await page.url()
    const pageTitle = await page.title()
    console.log('Page title is', pageTitle)
    console.log('Page URL is', pageURL)
    expect(page).toHaveURL(pageURL)
    await expect(page).toHaveTitle('STORE')
    await page.close
})