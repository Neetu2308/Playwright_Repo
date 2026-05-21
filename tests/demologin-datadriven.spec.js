import{test,expect} from "@playwright/test";
const validcredtional=require('../util/testcredentials.json')//importing json file
//..>>different folder
//./same folder
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')
})
test('login using valid cred',async({page})=>
{
   const usernamevalue=validcredtional.username
   const passwordvalue=validcredtional.password
    const username=page.locator("//input[@id='user-name']")
    await username.fill(usernamevalue)
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill(passwordvalue)
    const login=page.locator("//input[@id='login-button']")
   await  login.click()

    
})

test.only('login using invalidvalid cred',async({page})=>
{

    const username=page.locator("//input[@id='user-name']")
    await username.fill('problem_user1S')
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill('secret_sauce')
    const login=page.locator("//input[@id='login-button']")
   await  login.click()
    //const title=await page.title()
    // console.log(title)
    //await expect (page).toHaveTitle("Swag Labs")
    
    //const url=await page.url()
     //console.log(url)
   await expect(page).toHaveURL("https://www.saucedemo.com")
    
})
