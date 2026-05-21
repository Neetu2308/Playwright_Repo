import {test,expect} from  '@playwright/test'/*official test runner of Playwright package or library*/
test('RadiobuttonInPW',async({page})=>
{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
     const radio_button=page.locator("//input[@value='green']")
 // await radio_button.click()---first method
 await radio_button.check()//---second method
 const status=await radio_button.isChecked()//used to verify the status whether a radiobutton is selected or not
 console.log(status)
})