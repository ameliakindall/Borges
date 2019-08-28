/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe( "Login form", () => {

  const username = Cypress.env("username")
  const password = Cypress.env("password")

  beforeEach( () => {
    cy
      .visit( "?controller=my-account" )
      .get( "#login_form" ).as( "form" ).within( () => {
        cy
          .get( "label" ).as( 'labels' )

      } )
  } )

  context( "Form elements", () => {

    it( "Greets with 'Already registered?'", () => {
      cy.get( "@form" ).within( () => {
        cy.contains( "Already registered?" ).should( "be.visible" )
      } )
    } )

    it( "Has labels for the email and password inputs", () => {
      const expectedLabels = [ 'Email address', "Password" ]
      cy.get( "@labels" ).each( ( label ) => {
        expect( expectedLabels ).to.include( label.text() )
        expect( label ).to.be.visible
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

  } )

  context( "Form validation", () => {
    
    it( "Requires an email", () => {

    })

    it("Requires a password", () => {

    })
  })
} )
