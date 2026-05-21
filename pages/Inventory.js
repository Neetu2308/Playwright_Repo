export class Inventory{

    constructor(page)
    {
        this.page=page
        this.addtocart_btn=page.locator('#add-to-cart-sauce-labs-backpack')
        this.cart_btn=page.locator("//a[@data-test='shopping-cart-link']")
       /* this.checkout_btn=page.locator('#checkout')
        this.firstname=page.locator("//input[@id='first-name']")
        this.lastname=page.locator("//input[@id='last-name']")
        this.zip=page.locator("//input[@id='postal-code']")
        this.continue_btn=page.locator('#continue')
        this.finish_btn=page.locator('#finish')*/
    }
 
    async addtocart()
    {
       
         await this.addtocart_btn.click()
        return(this)
    }
    async clickcart()
    {
        await this.cart_btn.click()
    }
   /* async checkout(fname,lname,zip)
    {
        await this.checkout_btn.click()
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.zip.fill(zip)
        await this.continue_btn.click()
        await this.finish_btn.click()

    }*/
}