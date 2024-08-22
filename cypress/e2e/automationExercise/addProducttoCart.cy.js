/// <reference types="cypress" />
describe("Add the product and check the cart", () => {
    it("First Product", () => {
        cy.visit("https://www.automationexercise.com/")//visit page
        cy.get('.single-products').as('selectproducts')
        cy.get('@selectproducts').find('p').each(($el) => {

            if ($el.text() == 'Blue Top') {
                console.log($el.siblings())
                cy.wrap($el).siblings().contains('a').last().click({ force: true })

            }
        })

        cy.get("a[href='/view_cart']").contains('View Cart').click()
        let productCount
        cy.get(".cart_quantity>button").then(($el) => {
            //console.log($el.text)
            productCount = $el.text()
        }).then(() => {
            console.log(productCount)

        })

        /*cy.get("a[href='/products']").contains("Products").click()//Visit product page
        cy.get("a[href='#Women']").click()//Vist the Dress Page
        cy.get("a[href='/category_products/1']").click()//reach Women-Dress
        cy.get('.title').contains("Women - Dress Products")//checking the title of the page
        cy.get('.productinfo').contains('h2', 'Rs. 1000').parents('.productinfo').then(()=>{
        
            cy.get('button').contains('Add to Cart').should('be.visible').click()
        })*/


    })

})


