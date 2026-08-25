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
               await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
               const botonIDDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID' });
               await botonIDDinamico.click
               await expect (page.getByText('OMG, aparezco después de 3')).toBeVisible();
               
               
               //await botonIDDinamico.dblclick();
               //await botonIDDinamico.click({button:'right'});
               //await botonIDDinamico.click({modifiers:['Shift']});
               //await botonIDDinamico.hover();
            })
            
        })

        test('I filled in a text field in Automation Sandbox', async ({ page }) => {

            await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

            })
            
            await test.step('I can enter text into the A boring text field', async() => {

                await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edición').toBeEditable();
                await page.getByPlaceholder('Ingresá texto').fill('textoAEscribir');
                await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edición').toHaveValue('textoAEscribir');
 
            })
        
            
        
        })
        
       
        
     })
      
        test('I can select check boxes', async ({ page }) => {
          
           await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
           })

           await test.step('I can tick the “Pasta” checkbox', async () => {
                await page.getByRole('checkbox', { name: 'Pasta 🍝' }).check();
                await expect (page.getByRole('checkbox', { name: 'Pasta 🍝' }),'The checkbox was not ticked').toBeChecked();

            })

             await test.step('I can untick the tick box', async () => {
                await page.getByRole('checkbox', { name: 'Pasta 🍝' }).uncheck();
                await expect(page.getByLabel('Pasta 🍝'), 'The checkbox was not ticked').not.toBeChecked();

            })
            

            
          })
      
         test('I can select radio buttons', async ({ page }) => {
          
           await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
             })

           await test.step('I can select the radio button for No', async () => {
                await page.getByRole('radio', { name: 'No' }).check();


            })
        
        })

         test('I can select an item from the drop-down menu', async ({ page }) => {
             await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
             })

             await test.step('I can select a sport from the drop-down menu', async () => {
                await page.getByLabel('Dropdown').selectOption('Fútbol');


             await test.step('It is true that the drop-down list contains the expected sports', async () => {
                const deportes = ['Fútbol', 'Tennis', 'Basketball']
 
                for (let opcion of deportes) {
                    const element = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`);
                    if (element) {
                        console.log(`La opción '${opcion}' está presente.`);
                    } else {
                        throw new Error(`La opción '${opcion}' no está presente.`);
                    }
                }
 
            })
               

            })
            
        })
         
        test('I can select a day from the Days of the week drop-down menu', async ({ page }) => {
             await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
             })

             await test.step('I can select a day of the week from the drop-down menu', async () => {
                await page.getByRole('button', { name: 'Día de la semana' }).click();
                await page.getByRole('link', { name: 'Martes' }).click();
               

            })
            
        })

        test('I can upload files to the automation sandbox', async ({ page }) => {
             await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
             })

             await test.step('I am adding files to be uploaded', async () => {
                //await page.getByLabel('Upload file').setInputFiles(['pathALArchivo.pdf']);
                //await page.getByLabel('Upload file').setInputFiles([]);

               

            })
            
        })

        test('I can drag and drop items into the automation sandbox', async ({ page }) => {
             await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
             })

             await test.step('Drag and drop files', async () => {
                //await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));

               
               

            })
            
        })

        test('I validated the Names column in the static table', async ({ page }) => {
            await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
 
            await test.step('I can validate the entries for the Name column in the static table', async () => {
                const valoresColumnaNombres = await page.$$eval('h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)', elements => elements.map(element => element.textContent));
                const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];
                
                await test.info().attach('screenshot', {
                    body: await page.screenshot(),
                    contentType: 'image/png',
                })
                expect(valoresColumnaNombres).toEqual(nombresEsperados);
            })
 
        })

        test('It is true that all values in the pivot table change after a reload', async ({ page }) => {
            await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
 
            await test.step('Its true that the values changed when the webpage was reloaded', async () => {
                //Create an array containing all the values from the pivot table
                const valoresTablaDinamica = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresTablaDinamica);
 
                //I’m topping up so that the values can be updated
                await page.reload();
 
                //Create a second array containing the values after the reload
                const valoresPostReload = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresPostReload);
 
                //Check that all the values have changed for each cell.
                expect(valoresTablaDinamica).not.toEqual(valoresPostReload);
 
            })
 
 
        })

        test('Example of Soft AssertionsExample of Soft Assertions', async ({ page }) => {
            await test.step('Given that Im browsing the Free Range Testers automation sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step('I confirm that all the elements in the checkboxes are correct', async () => {
                await expect.soft(page.getByText('Pizzaa 🍕'), 'No se encontró el elemento Pizza 🍕').toBeVisible();
                await expect.soft(page.getByText('Hamburguesa 🍔'), 'No se encontró el elemento Hamburguesa 🍔').toBeVisible();
                await expect.soft(page.getByText('Pasta 🍝'), 'No se encontró el elemento Pasta 🍝').toBeVisible();
                await expect.soft(page.getByText('Heladoa 🍧'), 'No se encontró el elemento Helado 🍧').toBeVisible();
                await expect.soft(page.getByText('Torta 🍰'), 'No se encontró el elemento Torta 🍰').toBeVisible();
            })
 
        })
             

        

    })();