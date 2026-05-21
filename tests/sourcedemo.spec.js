import {test,expect}from '@playwright/test'
//import { beforeEach } from "node:test";
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')
})

test('@smoke login using valid cred',async({page})=>
{

    const username=page.locator("//input[@id='user-name']")
    await username.fill('problem_user')
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill('secret_sauce')
    const login=page.locator("//input[@id='login-button']")
   await  login.click()
   //await expect(page).toHaveURL("https://www.saucedemo.com")
    
})


test('@smoke login using correct  username and invalid pwd',async({page})=>
{

    const username=page.locator("//input[@id='user-name']")
    await username.fill('problem_user')
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill('secret_sauce')
    const login=page.locator("//input[@id='login-button']")
   await  login.click()
    //const title=await page.title()

   //await expect(page).toHaveURL("https://www.saucedemo.com")
    
})
test('login using invalid user and correct psd',async({page})=>
    {
   const username=page.locator("//input[@id='user-name']")
    await username.fill('problem_user1')
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill('secret_sauce')
    const login=page.locator("//input[@id='login-button']")
   await  login.click()


})

test('login using invalid  username and invalid pwd',async({page})=>
{

    const username=page.locator("//input[@id='user-name']")
    await username.fill('problem_user1s')
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill('secret_sauce1233')
    const login=page.locator("//input[@id='login-button']")
   await  login.click()
    //const title=await page.title()

   await expect(page).toHaveURL("https://www.saucedemo.com")
    
})

//tags are used to group or filter test 
//the tag will usually start @ symbol
//command uzed npx playwright test --grep "@smoke"