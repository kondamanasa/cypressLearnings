/// <reference types="cypress" />

describe("The login tests",()=>{

it("Valid username and invalid password",()=>{
    cy.visit("http://localhost:8000/login")
    cy.get('input[data-placeholder="email address"]').type("admin@admin.com")
    cy.get('input[data-placeholder="password"]').type('Wipro@123{enter}')

    cy.get('.mat-form-field.ng-tns-c78-4.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.ng-pristine.ng-invalid.ng-star-inserted.mat-form-field-invalid.ng-touched.mat-form-field-hide-placeholder').click()
    cy.get('input.mat-input-element').click()
    cy.get('input.mat-input-element').type(1234)
    
})
})
//git init 
//git command - m "Adding readme file"
//git push -u origin main
//git branching strategy
//git checkout -b samiscode This is a branch samicode