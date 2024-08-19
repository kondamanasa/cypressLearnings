/// <reference types="cypress" />
describe("Swag Lab Login Suite", () => {

    it("Inavlid username and valid password", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').click()
        cy.get('#user-name').type('visual_user')
        cy.get('#password').click()
        cy.get('#password').type('secret_saucee')
        //cy.get('input#login-button').click().clear()
        //expect(cy.get("h3[data-test='error']"))
        //cy.get('button.error-button')
        //cy.get('button.error-button').click()
        cy.get('input#user-name').click().clear()
        cy.get('input#user-name').type('standard_user')
        cy.get('input#password').clear().type('secret_sauce{enter}')//This is to enter directly without login
        //cy.get('input#login-button').click()
        cy.get('button#react-burger-menu-btn').click()
        cy.get('a#logout_sidebar_link').click()

        //cy.get('button#react-burger-cross-btn').click()


        //tagname [attribute='Value']  h3[data-test]

    })


})

//<dev> parent
//<label>, <input> children
//dev>input
//div[id="nav-global-location-slot"]>span>a>div

