/// <reference types="cypress" />

describe('Assertions testing', () => {

    it('Test for the url', () => {

        cy.visit("https://www.automationexercise.com/")
        cy.get('a[href="/products"]').should('be.visible').click();
        cy.get('a[href="#Women"]').should('be.visible').click();
        //comment
        //cy.url().should('not.contain', 7)
        //cy.visit("https://www.automationexercise.com/category_products/1")
        //cy.get("xpath=(.//*[normalize-space(text()) and normalize-space(.)='Rs. 500'])[2]/following::a[1]")
        /*cy.get('.single-products').should('have.length', 3)
        cy.get('.panel-heading>h4').first().should('have.class', 'panel-title')
        cy.get('.productinfo>h2').first().should('have.text', 'Rs. 1000')
        cy.get('.productinfo>a>i').first().should('be.visible')
        //cy.get('.product-overlay').first().should('be.visible')//this will fail
        cy.get('.product-overlay').first().should('exist')//exist is it exists in the DOm, but may not be visible*/

       
          


    })

})