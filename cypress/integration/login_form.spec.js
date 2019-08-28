/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe( "Login form", () => {

  beforeEach( () => {
    cy
      .visit( "/?controller=authentication&back=my-account" )
      .get( "#login_form" ).as( 'form' )

  } )

  context( "Form elements", () => {

    it( "Has an 'Already registered?' header", () => {
      cy.get( "@form" ).within( () => {
        cy.contains( "Already registered?" ).should( "be.visible" )
      } )
    } )

    it( "Links to /?controller=password", () => {
      cy.get( "@form" ).within( () => {
        cy
          .contains( "Forgot your password?" )
          .should( "have.attr", "href", `${Cypress.config().baseUrl}?controller=password` )
          .and( "be.visible" )
      } )
    } )

})
} )
