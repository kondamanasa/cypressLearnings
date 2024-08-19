/// <reference types="cypress" />
describe("The cypress Switch Login Suite", () => {

    /*it("Forgot Password Page", () => {
        cy.visit("https://cypress-training.iliad-solutions.com/reg/")//visit the website
        cy.get("input#textfield-6199-inputEl").click().type("admin")//Enter username
        cy.get("input#textfield-6200-inputEl").click().type("changeme")//Enter Password
        cy.get("#container-6203-innerCt>a").click()//Forgot Password
        cy.get("span#button-6211-btnIconEl").click()//Cancel the change of Password and return
    })*/


    it("Login Successful", () => {
        cy.visit("https://cypress-training.iliad-solutions.com/reg/")//visit the website
        cy.get("input#textfield-6199-inputEl").click().type("admin")
        cy.get("input#textfield-6200-inputEl").click().type("changeme")
        cy.get("span#button-6205-btnIconEl").click()
        cy.get("td[@id='ext-gen9168']/div").click()
        //cy.get(".x-grid-cell-inner").contains("MASTERCARD_S").click()//Select the Test System
        `cy.get("span#button-6254-btnIconEl").click()//Click Okay
        cy.get("#button-1031-btnIconEl").click()//Select Administrator
        cy.get("#button-1077-btnIconEl").click()//Select Roles
        cy.get("#button-2995-btnIconEl").click()//Create role


    })




Q

})