import{test,expect}from '@playwright/test'
test('ChecboxinPW',async({page})=>{

await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const chkbox=page.locator("//input[@value='option-2']")
//await chkbox.click()
await chkbox.check()
const chkbox3=page.locator("//input[@value='option-3']")
await chkbox3.check()
await chkbox3.check()//will remove the check
await chkbox3.uncheck()
const status=await chkbox3.isChecked()
console.log(status)

})