/// <reference types="cypress" />
//To show auto commands of cypress

describe('Login tests suite', () => {

    it('invalid username & valid password', () => {
        cy.visit("https://cypress-training.iliad-solutions.com/reg/index.html")
        cy.get('input[type="text"][id="textfield-6236-inputEl"]').type("admin")
        cy.get('input[type="password"][id="textfield-6237-inputEl"]').type("changeme")
        cy.get('span[id="button-6242-btnIconEl"]').click()
        cy.pause()
        cy.contains('div[unselectable="on"].x-grid-cell-inner').contains('IFSF_B2B').click();
        cy.get('span#button-6336-btnIconEl').click()
        cy.get('span#button-6312-btnIconE1').click()
        cy.get('span#button-1031-btnIconEl').click()
        cy.get('span#button-1078-btnIconEl').click()
        cy.get('span#button-2930-btnIconEl').click()
        cy.get('input#textfield-6377-inputEl[type="text"][name="username"]').click().type("manasa")
        cy.get('input#textfield-6423-inputEl[type="text"][name="emailAddress"]').click().type("manasa.konda@iliad-solutions.com")
        cy.get('span#button-6456-btnIconEl.x-btn-icon-el').click()




        

        //   cy.get("input[name='username']").click()
        // cy.get("input[name='username']").type('admin')
        //expect(cy.get("h3[data-test='error']"))
    })
    /*
    it('Valid username & invalid password',()=>{
        
    })
    it('valid username & valid password',()=>{
        
    })*/

        //wildcard is *
        //input[type*="text"] //wildcart contains
        //input[type^= ]//carat symbol starts
        //ending part is $ends

})

//li list of type
//<div>
//  <div1> <div2>
//div[class='']>div:nth-of-type(1)//pass the number of which one to select
//ul#category>li:last-of-type
//if I want sibling of 1 then div[class='']>div:nth-of-type(1)+div