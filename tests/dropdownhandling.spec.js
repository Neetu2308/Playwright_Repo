import { test,expect } from "@playwright/test";

test('dropdownhandling',async({page})=>
{
    await page.goto('https://selenium.qabible.in/select-input.php')
    const ddl=page.locator("//select[@id='single-input-field']")

    //selecting using visible text>>label ppty is used
    await ddl.selectOption({label:'Yellow'})
    //select by value
    await ddl.selectOption({value:'Green'})

    //select by index
    //to rerun flakey testcases ie testcase that behaves inconsistant

    //await ddl.selectOption({index:'Red'})
//workers are the concept used to do parallel execution.Parellel excution refers to executing mutiple task at same ime
//used for faster execution and save time


//npx playwright test tests/radiobutton.spec.js tests/dropdownhandling.spec.js --headed
}

)