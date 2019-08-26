/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe( "Login form", () => {

  beforeEach( () => {
    cy.visit( "/?controller=authentication&back=my-account" )
    cy.get( "#login_form" ).should( "be.visible" ).as( 'form' )

  } )

  context( "Form elements", () => {

    it( "Links to /?controller=password", () => {
      cy.get( "@form" ).within( () => {
        cy
          .contains( "Forgot your password?" )
          .should( "have.attr", "href", `${Cypress.config().baseUrl}?controller=password` )
          .and("be.visible")
      } )
    } )
  } )
} )
