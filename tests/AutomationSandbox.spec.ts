import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
     let browser: Browser;
     let page: Page;

     test.describe('Accions in Automation Sandbox',() => {

        test('Click on Button ID Dinamico', async ({ page }) => {

            await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');   
            })

            await test.step('Can I click on the button with a ID Dinamico', async () => {
                page.getByRole('button', { name: 'Hacé click para generar un ID' })
            })
            
        })
     })


})();