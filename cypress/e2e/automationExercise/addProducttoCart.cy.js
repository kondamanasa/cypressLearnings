/// <reference types="cypress" />
describe("Add the product and check the cart",()=>{
it("First Product",()=>{
cy.visit("https://www.automationexercise.com/")//visit page
cy.get("a[href='/products']").contains("Products").click()//Visit product page
cy.get("a[href='#Women']").click()//Vist the Dress Page
cy.get("a[href='/category_products/1']").click()//reach Women-Dress
cy.get('.title').contains("Women - Dress Products")//checking the title of the page
cy.get('.productinfo').contains('h2', 'Rs. 1000').parents('.productinfo').then(()=>{

    cy.get('button').contains('Add to Cart').should('be.visible').click()
})


})


})



