/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe( "Login form", () => {

  const username = Cypress.env( "username" )
  const password = Cypress.env( "password" )

  beforeEach( () => {
    cy
      .visit( "?controller=my-account" )
      .get( "#login_form" ).as( "form" )
  } )

  context( "Form elements", () => {

    beforeEach( () => {
      cy.get( "@form" ).within( () => {
        cy
          .get( "label" ).as( 'labels' )
          .get( "h3" ).as( "heading" )
          .get( "a" ).as( "recoverPassword" )
      } )
    } )

    it( "Greets with 'Already registered?'", () => {
      cy.get( "@heading" ).contains( "Already registered?" ).should( "be.visible" )
    } )

    it( "Has labels for the email and password inputs", () => {
      const expectedLabels = [ 'Email address', "Password" ]
      cy.get( "@labels" ).each( ( label ) => {
        expect( expectedLabels ).to.include( label.text() )
        expect( label ).to.be.visible
      } )
    } )

    it( "Links to /?controller=password", () => {
      cy.get( "@recoverPassword" ).should( ( link ) => {
        expect( link ).to.be.visible
        expect( link.text() ).to.eql( "Forgot your password?" )
        expect( link.attr( "href" ) ).to.eql( `${Cypress.config().baseUrl}?controller=password` )
      } )
    } )
  } )

  context( "Form validation", () => {
    beforeEach( () => {
      cy.get( "@form" ).within( () => {
        cy
          .get( "button" ).as( "submitButton" )
          .get( "input.account_input" ).as( "inputs" ).spread( ( email, password ) => {
            cy.wrap( email ).as( "emailInput" )
            cy.wrap( password ).as( "passInput" )
          } )
      } )
    } )

    it( "Requires an email", () => {
      cy
        .get( "@submitButton" ).click()
        .get( ".alert:visible" ).within( () => {
          cy
            .get( "p" ).should( "have.text", "There is 1 error" ).and("be.visible")
            .get( "li" ).should( "have.text", "An email address required." ).and("be.visible")
        } )
    } )

    it.only( "Requires a password", () => {
      cy
        .get( "@emailInput" ).type( `${username}{enter}` )
        .get( ".alert:visible" ).within( () => {
          cy
            .get( "p" ).should( "have.text", "There is 1 error" ).and("be.visible")
            .get( "li" ).should( "have.text", "Password is required." ).and("be.visible")
        } )
    } )
  } )
} )
