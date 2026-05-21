import{test,expect}from '@playwright/test'
import { LoginPage } from '../pages/LoginPageMain'
test ('Login using valid creds',async({page})=>
{
  
    const loginpage=new LoginPage(page)//passing the fixture to constructor
    await loginpage.goto()
   await loginpage.login('standard_user','secret_sauce')
   
     //await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    
    })