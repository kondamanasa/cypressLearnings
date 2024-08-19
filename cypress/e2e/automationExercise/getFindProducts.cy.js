/// <reference types="cypress" />
describe("Find the products",()=>{
it("First Product",()=>{
cy.visit("https://www.automationexercise.com/")
//cy.get('.single-products').find('.productinfo').eq(0).find('h2').should('contain.text', '500')//0 refers to the first product in the index
cy.get('.single-products').find('p').each(($el)=>{

    if(el.text()=='Full Sleeves To Cherry - Pink')
    //console.log($el.text())
$el.find(i)
})


})



})