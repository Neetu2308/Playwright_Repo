//mouse over

import { expect,test } from "@playwright/test";
import { text } from "node:stream/consumers";

test ('Mouse Hover', async({page})=>
{
    await page.goto('https://selenium.qabible.in/')
    const mouse_hover=page.locator('#others').hover()
    await page.goto('https://selenium.qabible.in/drag-drop.php')
   const right_click=page.locator("//span[text()='Draggable n°1']").click({button:'right'})

   //const double_click=await page.locator("//span[text()='Draggable n°2']").dblclick()

  // const drag_and_drop=await page.locator("//span[text()='Draggable n°3']").dragTo(page.locator('#mydropzone'))
   
})