//3 types of alert >>simple,confirmation alert and prompt alert

//simple alet only hav ok button
//confirmation alert>>ok and cancel
//prmpt alert>>Input box,ok and cancel

import{test,expect}from '@playwright/test'
import { only } from 'node:test'
test('simplealert',async({page})=>{
   
    await page.goto('https://selenium.qabible.in/javascript-alert.php')

    page.on('dialog',async dialog=>{  //on method is used to listen for event
        //'dialog' is the event name -used to detect when an alert occurs
        //  and 2nd dialog is object-used to handle or control alert,This object is provided by PW
 expect(dialog.message()).toBe('I am a Javascript alert box!')//to verify the message in the alert is matching to this message

        await dialog.accept()
    })
    const clickme=page.locator("//button[@onclick='jsAlert()']")
    await clickme.click()
})




    test ('cofirmationalert',async({page})=>{
   
    await page.goto('https://selenium.qabible.in/javascript-alert.php')

    page.on('dialog',async dialog=>{  //on method is used to listen for event
        //'dialog' is the event name -used to detect when an alert occurs
        //  and 2nd dialog is object-used to handle or control alert,This object is provided by PW
 //expect(dialog.message()).toBe('I am a Javascript alert box!')//to verify the message in the alert is matching to this message

        //await dialog.accept()

        await dialog.dismiss()
    })
    const confoclickme=page.locator("//button[@onclick='jsConfirm()']")
    await confoclickme.click()
})


 test.only('promptalert',async({page})=>{
   
    await page.goto('https://selenium.qabible.in/javascript-alert.php')

    page.on('dialog',async dialog=>{ 

        //await dialog.accept('Neetu')
        await dialog.dismiss('Neetu')

    })
    const promptclickme=page.locator("//button[@onclick='jsPrompt()']")
    await promptclickme.click()
})
