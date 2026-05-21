import{test,expect} from '@playwright/test'
test('laptestlogin',async({page})=>
{
   await page.goto('https://laptest.compassforsuccess.ca/portal//index.do')
   const username=page.locator("//input[@id='username']")
  await username.fill('neetu_kpdsb')
    const password=page.locator("//input[@id='password']")
   await password.fill('jzL!vdG19NPj')
   const login=page.locator("//button[@type='submit']")
  await  login.click()

}
)