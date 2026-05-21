import { getcellData } from "../util/excelreader2";
import{test,expect}from '@playwright/test'
test ('test using excel row and column',async({page})=>{
    const uname=getcellData(2,1)
    const password=getcellData(2,2)
    await page.goto('https://www.saucedemo.com/')
    const username=page.locator("//input[@id='user-name']")
    await username.fill(uname)
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill(password)
    const login=page.locator("//input[@id='login-button']")
    await  login.click()
}
)