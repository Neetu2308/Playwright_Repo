import{test,expect} from "@playwright/test";
//import { beforeEach } from "node:test";
//to navigate to same page web page mutiple times from different test case hook such as 'Before Each'  is used
test.beforeEach(async({page})=>{
    await page.goto('https://www.demoblaze.com/')
})
test('signup using valid cred',async({page})=>
{
   //  await page.goto('https://www.demoblaze.com/')
    const signup=page.locator("//a[@id='signin2']")
    //const signup =page.getByText('Sign up')
    await signup.click()
    const username=page.locator("//input[@id='sign-username']")
    await username.fill('neetus')
     const password=page.locator("//input[@id='sign-password']")
    await password.fill('neetus')
    await page.getByRole('button', { name: 'Sign up' }).click()
})
test('testing close',async({page})=>
{
  await page.locator('#signin2').click();
  await page.locator('#signInModal .btn-secondary').click();
})
test ('login using valid cred',async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('neetus')
    await page.locator('#loginpassword').fill('neetus')
   await page.getByRole('button', { name: 'Log in' }).click()

})
test ('login using invalid username and valid password',async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('neetus1')
    await page.locator('#loginpassword').fill('neetus')
    await page.getByRole('button', { name: 'Log in' }).click()

})
test ('login using valid username and invalid password',async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('neetus')
    await page.locator('#loginpassword').fill('neetus1')
   await page.getByRole('button', { name: 'Log in' }).click()

})
test ('login using invalid username and invalid password',async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('neetus1')
    await page.locator('#loginpassword').fill('neetus1')
   await page.getByRole('button', { name: 'Log in' }).click()

})

