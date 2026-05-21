import { Given,Then,When,Before,BeforeAll,BeforeStep,After,AfterAll,AfterStep,Status,setDefaultTimeout } from '@cucumber/cucumber'
import { chromium } from 'playwright'
import assert  from 'assert'
setDefaultTimeout(30000)

let browser
let context
let page
BeforeAll(async function() {
    browser=await chromium.launch({headless:false})
    
})
AfterAll(async function () {
   if(browser)
   {
    await browser.close()
   }
    
})
Before(async function () {
    context=await browser.newContext()
    page=await context.newPage()
    
})
After(async function(scenario)  {//scenario is a parameter variable
    try{
        if(scenario.result.status===Status.FAILED)
        {
           // const screenshot=await page.screenshot()
           await page.screenshot({ path:`screenshot/${Date.now()}.png`})
           // this.attach(screenshot,'image/png')
        }
    }
        catch(error)
            {
                    console.log("After hook Error",error.message)
            }
        
        
    
    finally 
    {
        if(context)

        {
            await context.close()
        }
    }


    
})
BeforeStep(async function (step) {
    console.log(`${step.pickleStep.text}`)   //print the  step that is currently running 
})
AfterStep(async function (step) {
  console.log(`${step.pickleStep.text}`)      
})
Given('User is on application loginpage',async function () {
    await page.goto('https://www.saucedemo.com/')
    
})
When('User logs in with username {string} and password {string}',async function (username,password) {

  await page.fill('#user-name',username)
  await page.fill('#password',password)
  await page.click('#login-button')

    
})
Then('User should see {string}',async function (result) {
    if(result==='Inventory Page')
    {
        await page.waitForSelector("//span[@data-test='title']")//wait until page to load 
    }
    else if(result==='Error Message')
    {
        await page.waitForSelector("//h3[@data-test='error']")
    }
})
Then('Inventory items count should {string}',async function (count) {
    if (count==='0') 
    {
    return
    }
    const items=await page.locator("//div[@class='inventory_item_name ']").count()
    assert.strictEqual(items,Number(count))//Number is used to convert the string value we get from feature file
    
})
//to generate report
//npx cucumber-js --require step-definition/*.js --format html:reports/cucumber-report.html

//retry
//npx cucumber-js --require step-definitions/**/*.js --tags "@validation" --retry 2