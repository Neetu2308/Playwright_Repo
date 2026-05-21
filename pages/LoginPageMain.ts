import { Inventory } from "./Inventory"
import { Page,Locator } from '@playwright/test'

export class LoginPage{
    page:Page
    username:Locator
    password:Locator
    login_btn:Locator
//export is given to use all the elements in test class
constructor(page:Page){
    this.page=page //this.page is the ppty of this class
    this.username=page.locator("//input[@id='user-name']")
    this.password=page.locator("//input[@id='password']")
    this.login_btn=page.locator("//input[@id='login-button']")

}
async goto(){
    await this.page.goto(('https://www.saucedemo.com/'))
    return this
}
async login(user:string,pass:string)//gt the value from test class
{
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.login_btn.click()
    return new Inventory(this.page)
}


}

