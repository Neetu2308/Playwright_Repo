import {test,expect} from  '@playwright/test'/*official test runner of Playwright package or library*/

test('Page Locator Test',async({page})=>
    //locators are use to identify webelements
{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    const messagebox=page.locator('#single-input-field')//locating using id (#)
  //const secmessagebox=page.locator('.form-control')//locating using class (.)
//locating using xpath >>>//tagname[@attribute='value']
//const  gettotal=page.locator("//button[@id='button-two']")
//using  text >>tagname[text()='value']
//button[text()='Get Total']
//const  gettotaltext=page.locator("//button[text()='Get Total'")
const showmessage=page.locator('#button-one')
 await messagebox.fill("hello world")
await showmessage.click()
//spcial locators:build in method only in Playwright.can find elements smarter way using this
//Mainly used for ARIA applicatin
//ARIA:Accessible Rich  Interm=net Applications
//ARAI attributes:role,Label,state

}
)

test.only("specialLocators",async({page})=>
{
  await page.goto('https://groceryapp.uniqassosiates.com/admin')
  const  username=page.locator("//input[@name='username']")
  await username.fill("admin")
  const password=page.locator("//input [@name='password'] ")
  await password.fill("admin")
  const button=page.locator("//button[@type='submit']")
  await button.click()
  await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin')

  //get by role>>locate elements using arai role and accessible name
  //it is Pw locator used to find elements based on their role and visible name,making test more stable and user friendly
  //syntax:page.getByRole(role,{name:'text'})>>>
  //await page.getByRole('button',{name:'Active'}).nth(0).click()//---role>>button ,text>>active
  //get by text>>page.getByText('Text')
  await page.getByText('Active').nth(7).click()
  //To access first element
  //await page.getByTestId('Active').first().click()
   //To access last element
    await page.getByTestId('Active').last().click()

})
