//taking screenshot for static page
import{test,expect} from "@playwright/test"
test('visualtesting',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')//networkidle-complete page is loaded
    await expect(page).toHaveScreenshot('loginpage.png',{threshold:0.2,maxDiffPixels:100})
    //toHavescreenshot-to capture screenshot
    //loginpag.png -is the file nane
    //threshold-how much difference is acceptable
    //0->strict no difference is acceptable
    //1 ->large difference is acceptable
    //maxdiffpixel--how much pixel are allowed
    //baseline report will only change is update KW


})