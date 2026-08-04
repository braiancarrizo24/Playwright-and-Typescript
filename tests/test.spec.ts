import { test, Browser, Page } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Navigate in www.freerangetesters.com',() => {

        test('The main links redirect correctly', async ({ page }) => {

            await test.step('While on the main website www.freerangetesters.com', async () => {
                page.goto('https://www.freerangetesters.com');

            })


            await test.step('When I click on “Courses”', async () => {
                page.locator('#page_header').getByRole('link', { name: 'Cursos', exact: true}).click ();
                await page.waitForURL('**/cursos');
            })


            await test.step('I am redirected to the “courses” subpage', async () => {
                

            })
        })
    })
})();