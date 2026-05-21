import{test,expect} from '@playwright/test'
import { hasUncaughtExceptionCaptureCallback } from 'node:process'
test('Date Picker',async({page})=>
{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    const datepicker=page.locator('#single-input-field')
    await datepicker.click()
    const targetyear=1997
    await expect(page.locator('.dropdown-menu')).toBeVisible()//to wait until the calender pop up element is visible on the page and also confirm if it is displayed
    const calenderswitch=page.locator('.datepicker-switch:visible')// visible is used to slect and filter only visible element
    await calenderswitch.click()
    await calenderswitch.click()
    

    let attempts=10
    while(attempts--)
    {
      const decades=await calenderswitch.innerText()//get the text visible on the screen
      const startyear=parseInt(decades.split('-')[0].trim())
      /*decades now contain 2020-2029.
       decade.split will split to ["2020","2029"]
      [0] will get 2020 and trim removes the extra spaces
      parseInt is to convert the string to int*/
      if(targetyear>=startyear && targetyear<=startyear+9)
      {
        break
      }
      await page.locator('.prev:visible').click()
     
    }
    await page.locator('.year:visible').filter({hasText:'1997'}).click()//hastext is used to filter elemnts based on visible text
    await page.locator('.month:visible').filter({hasText:'Feb'}).click()//hastext is used to filter elemnts based on visible text
     await page.locator('.day:visible').filter({hasText:/^9$/}).click()//extract the exact 9 
    //await page.locator('.day:visible').filter({hasText:'28'}).nth(1).click()
    //await page.locator('.day:not(.old):not(.new)').filter({ hasText: /^8$/ }).click()
     await page.locator('#button-one').click()

}

)

