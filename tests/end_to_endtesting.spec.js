//end to end testing is to test from start to end

import { test,expect } from "@playwright/test";

test('End to End Testing',async({page})=>
{
   await page.goto('https://www.saucedemo.com/')
   const username=page.locator("//input[@id='user-name']")
      await username.fill('standard_user')
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill('secret_sauce')
    const login=page.locator("//input[@id='login-button']")
   await  login.click()
   const addtocart=page.locator('#add-to-cart-sauce-labs-backpack')
   await addtocart.click()
   const cart=page.locator("//a[@data-test='shopping-cart-link']")
   await cart.click()
   const checkout=page.locator('#checkout')
   await checkout.click()
   const firstname=page.locator("//input[@id='first-name']")
   await firstname.fill('Test')
   const lastname=page.locator("//input[@id='last-name']")
   await lastname.fill('User')
    const zip =page.locator("//input[@id='postal-code']")
   await zip.fill('12345')
   const cont=page.locator('#continue')
   await cont.click()
   const finish=page.locator('#finish')
   await finish.click()
   await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
}



)