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

  function verifyLoginError( errorMessage ) {
    cy.get( ".alert:visible" ).within( () => {
      cy
        .get( "p" ).should( "have.text", "There is 1 error" ).and( "be.visible" )
        .get( "li" ).should( "have.text", errorMessage ).and( "be.visible" )
    } )
  }

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

    // TODO: change include test to read as expect( label.text() ).to.be.oneOf( expectedLabels )
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
            cy.wrap( password ).as( "passwordInput" )
          } )
      } )
    } )

    it( "Requires an email", () => {
      cy.get( "@submitButton" ).click()
      verifyLoginError( "An email address required." )
      cy.url().should( "eql", `${Cypress.config().baseUrl}?controller=authentication` )
    } )

    it( "Requires a password", () => {
      cy
        .get( "@emailInput" ).type( `${username}{enter}` )
      verifyLoginError( "Password is required." )
      cy.url().should( "eql", `${Cypress.config().baseUrl}?controller=authentication` )
    } )

    it( "Has email validation", () => {
      cy
        .get( "@emailInput" ).type( "fake.fakerson@!$%.com" )
        .get( "@passwordInput" ).type( password )
        .get( "@submitButton" ).click()
      verifyLoginError( "Invalid email address." )
    } )

    it( "Has password validation", () => {
      cy
        .get( "@emailInput" ).type( username )
        .get( "@passwordInput" ).type( `fa{enter}` )
      verifyLoginError( "Invalid password." )
    } )
  } )
} )
