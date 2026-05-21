import{test,expect} from'@playwright/test'
 test ('update contact',async({page})=>
{
    await page.goto('https://groceryapp.uniqassosiates.com/admin/login')

    const username=page.locator("//input[@name='username']")
    await username.fill('admin')
    const password=page.locator("//input[@name='password']")
    await password.fill('admin')
    const signin=page.locator("//button[@class='btn btn-dark btn-block']")
    await signin.click()
    const managebtn=page.getByRole('link', { name: 'Manage Contact' })
    await managebtn.click()
//const edit = page.locator('.btn.btn-sm.btn-primary.btncss')//comeback
await page.locator('a[href*="edit_contact"]').click();
   // await edit.click()
    const phone=page.locator("//input[@id='phone']")
    await phone.fill('122344545')
    const email=page.locator("//input[@id='email']")
    await email.fill('test@gmail.com')
    const address=page.locator("//textarea[@name='address']")
    await address.fill('test address 12344')
    const delverytime=page.locator("//textarea[@name='del_time']")
    await delverytime.fill('11AM-3PM')
    const del_limit=page.locator("//input[@id='del_limit']")
    await del_limit.fill('17')
    const submit_btn=page.locator("//button[@name='Update']")
    await submit_btn.click()
    await expect(page.locator('.alert-success')).toContainText('Contact Updated Successfully')


 })