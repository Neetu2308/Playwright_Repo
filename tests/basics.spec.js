//need to use spec.js (namimg convention)to create a test file//
//spec indicates specification


import {test,expect} from  '@playwright/test'/*official test runner of Playwright package or library*/

import { create } from 'node:domain'
import { start } from 'node:repl'
test('Browser Context Playwright Test',async( {browser})=>{
    //test denotes test case
    //'Browser Context Playwright Test'>>test case name
    //{browser} is browser fixture .It represent browers

    const Context=await browser.newContext()
    //create a new browser session
    const Page=await Context.newPage()
    //create a nw tab inside the session created above
    await Page.goto('https://selenium.qabible.in/')
    //goto >>to launch url
/******************* */
/*1.broser start
session create
tab create
Launch website*/
})

test.only('page playwright test' ,async ({page})=>  //only kw is used to run current test case only
{
     await page.goto('https://selenium.qabible.in/')
     const title=await page.title()
     console.log(title)
     await expect (page).toHaveTitle("Obsqura Testing")
    // await expect (page).toHaveTitle("Obsqura Testings")//wrong title
})

//assertion is used to verify if the pgm  behaves as expected during test.
