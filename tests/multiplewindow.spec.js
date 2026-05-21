import { test,expect } from "@playwright/test";
import { aborted } from "util";
test('multiwindow',async({page,context})=> //for handling multiple window context fixture is also added
//page fixture is used for single page
{
   await  page.goto('https://demo.guru99.com/popup.php') 
   const popup=context.waitForEvent('page')//wait for event is used to wait until a new tab or window is opened
   const clickhere=page.locator("//a[text()='Click Here']")
   await clickhere.click()
   const newpopup=await popup
   await newpopup.waitForLoadState()//used to wait until the page is completly loaded


   const email=newpopup.locator("//input[@name='emailid']")
   await email.fill('test123@gmail.com')
   const submit=newpopup.locator("//input[@name='btnLogin']")
   await submit.click()

}

)