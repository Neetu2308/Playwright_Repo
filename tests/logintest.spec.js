import{getData}from'../util/excelreader'
import{test,expect}from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
const credential= getData()
test ('Login using valid creds',async({page})=>
{
    for(const data of credential)
    {
    const loginpage=new LoginPage(page)//passing the fixture to constructor
    await loginpage.goto()
    //await loginpage.login('standard_user','secret_sauce')
    await loginpage.login(data.UserName,data.Password)
   // const inventory=await(await loginpage.goto()).login('standard_user','secret_sauce')//chaining in Pw
     //await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    }
})