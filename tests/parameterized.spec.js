//To pass multiple data set using data driven

import{test,expect} from "@playwright/test";
const dataset=require('../util/parameterizedtestdata.json')
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')
})
for(const data of dataset)
{
test.only(`login using in validvalid cred ${data.username} {data.password}`,async({page})=>
    //should use back tick instead single quote in the test case name
{

    const username=page.locator("//input[@id='user-name']")
    await username.fill(data.username)
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill(data.password)
    const login=page.locator("//input[@id='login-button']")
   await  login.click()

})
}



