import { test,expect } from '@playwright/test'
import { SignUpPageDemo } from '../pages/SignUpPageDemo'
import { LoginPageDemo } from '../pages/LoginPageDemo'
import { AddtoCartDemo } from '../pages/AddtoCartDemo' 
import { Purchase } from '../pages/PurchaseDemo'
import signupinfo from '../util/signup.json' assert { type: 'json' }
import userinfo from  '../util/userinfo.json' assert { type: 'json' }
import { valid_username, validcreds,invalid_username,invalid_password,invalid_cred} from '../util/demo_login'


test ('SignUp' ,async({page})=>
{

    const signupage=new SignUpPageDemo(page)

    await signupage.goto()
    await signupage.sig(signupinfo.username,signupinfo.password)


})
test ('Close',async({page})=>
{
        const signupage=new SignUpPageDemo(page)
        //await signupage.sig(signupinfo.username,signupinfo.password)
    await signupage.goto()

        await signupage.close_signup(signupinfo.username,signupinfo.password)


})
test ('login using valid cred',async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    await loginpage.login_action(validcreds.username,validcreds.password)
    await expect(page.locator('#nameofuser')) .toContainText('Welcome neetus')

})
   
test ('login using valid username and inavlid password',async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    const dialogbox= page.waitForEvent('dialog')
    await loginpage.login_action(invalid_password.username,invalid_password.password)
    const dialog = await dialogbox
    expect(dialog.message()).toContain('Wrong password.')
    await dialog.accept()
})
test ('login using invalid username and valid password',async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    const dialogbox= page.waitForEvent('dialog')
    await loginpage.login_action(invalid_username.username,invalid_username.password)
    const dialog = await dialogbox
    expect(dialog.message()).toContain('User does not exist.')
    await dialog.accept()
})
test ('login using invalid username and invalid password',async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    const dialogbox= page.waitForEvent('dialog')
    await loginpage.login_action(invalid_cred.username,invalid_cred.password)
    const dialog = await dialogbox
    expect(dialog.message()).toContain('User does not exist.')
    await dialog.accept()
})

test('Select mobile',async({page})=>
{

      const loginpage=new LoginPageDemo(page)
      const dialogbox= page.waitForEvent('dialog')
    await loginpage.goto()
    await loginpage.login_action(validcreds.username,validcreds.password)
    await expect(page.locator('#nameofuser')) .toContainText('Welcome neetus')
    const addtocart= new AddtoCartDemo(page)
    await addtocart.select_mobile()
    const dialog = await dialogbox
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
    

})

test('Purchase a Monitor',async({page})=>
{

    const purchase=new Purchase(page)
    const loginpage=new LoginPageDemo(page)
    const dialogbox= page.waitForEvent('dialog')
    await loginpage.goto()
    await loginpage.login_action(validcreds.username,validcreds.password)
    const addtocart= new AddtoCartDemo(page)
    await addtocart.select_monitor()
    const dialog = await dialogbox
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
    await purchase.cart()
    await purchase.add_details(userinfo.name,userinfo.country,userinfo.city,userinfo.card,userinfo.month,userinfo.year)
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();

  
})

test ('Logout', async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    await loginpage.login_action('neetus','neetus')
    await expect(page.locator('#nameofuser')) .toContainText('Welcome neetus')
    await loginpage.logout()
    await expect(page.locator('#login2')).toHaveText('Log in')

})
  