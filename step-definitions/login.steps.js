//defining the gherkins
//this file contain automation code
//Login.feature>>//this file contatin step scenrios>>for non techinal user as it is plain English
//Login.feature contatins describe application behaviour
import { Given,When,Then,setDefaultTimeout } from '@cucumber/cucumber';//importing given,when,setDefaulttime outthen from cucumber package
//and fn generally does not exist in step definition usage 
//setDefaultTimeout used to increase cucumber waiting time
setDefaultTimeout(60000)
import { chromium } from 'playwright';//import chromimum broswer functionality from Pw
import assert from 'assert';//import assesrtion functionality
let browser//store browser
let page//store page
//broser and page are declared outside function to make the accessibl through step defn file
//*****step definition syntax**************
Given('User is on Login Page',async function()
{
    browser=await chromium.launch({headless:false})//launch browser in visible mode and store into a browser variable for further automation actions
    const context=await browser.newContext()
    //newcontext mthod creates a seperate brwser session
    page=await context.newPage()
    //newPage opens   a new browser tab
    await page.goto('https://www.saucedemo.com/')
})
When('User enters valid username and valid Password',async function () 
{
    await page.fill('#user-name','problem_user')
    await page.fill('#password','secret_sauce')
///test

})
//parameterized
When('User enters valid username {string} and invalid Password {string}',async function (username,password) 
{
    await page.fill('#user-name',username)
    await page.fill('#password',password)
})
When('clicks on Login Button',async function () 
{
    await page.click('#login-button')
})
Then('User should navigate to Home Page',async function () {
    const title=await page.title()
    assert.ok(title.includes('Swag Labs'))//include is used to check whether specified text is present or not
    await browser.close()
})
Then('User should see Error Message',async function () {
    
    const error=await page.locator("//h3[@data-test='error']").textContent()//to get text 
    assert.ok(error.includes('Epic sadface: Username and password do not match any user in this service'))
    await  browser.close()
})