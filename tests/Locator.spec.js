const { test, expect } = require('@playwright/test')
test('Locator', async ({ page }) => {
    await page.goto('https://demoblaze.com/')
    //Click on login button
    await page.locator('id=login2').click()
    //Provide user name by CSS
    await page.fill('#loginusername', 'pavanol')
    //Provide password by CSS
    await page.fill("input[id='loginpassword']", 'test@123')
    //Click on login button by xpath
    await page.click("//button[text()='Log in']")
    //Verify Logout button
    await expect(await page.locator("//*[@id='logout2']")).toBeVisible()
    page.close()

})              