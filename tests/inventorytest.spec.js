import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Inventory } from '../pages/Inventory'

test ('Add to cart',async({page})=>
    {
        const loginpage=new LoginPage(page)
        await loginpage.goto()
        await loginpage.login('standard_user','secret_sauce')
       // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
        const inventory=new Inventory(page)
        await inventory.addtocart()
        await inventory.clickcart()
        //await page.pause()
        //await inventory.checkout('Test','User','1234')
        // await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')

    }
)