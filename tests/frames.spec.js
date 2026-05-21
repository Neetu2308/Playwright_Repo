import{test,expect} from '@playwright/test'

test ('Frames',async({page})=>

    //a web page inside a another webpage
    //to interact with elements in frame frame locators are used
    //to identify a frameS---will have iframe tag
    //each page will have indivaul html document
{

    await page.goto('https://demoqa.com/frames')
    const sampleframe=page.frameLocator("#frame1")
    console.log(await sampleframe.locator("#sampleHeading").textContent())
  
})

