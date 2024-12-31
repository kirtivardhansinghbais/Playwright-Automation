const { test, expect } = require('@playwright/test')

test('Locate multiple wen element on the page', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html')
    //Captyre all link and print
    const links = await page.$$('a')
    for (const link of links) {
        const linkText = await link.textContent()
        console.log(linkText)
    }

    //Capture all products name
    await page.waitForSelector("//*[@id='tbodyid']//h4/a")
    const products = await page.$$("//*[@id='tbodyid']//h4/a")
    for (const product of products) {
        const productName = await product.textContent()
        console.log(productName)
    }

})