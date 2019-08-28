/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe( "Login form", () => {

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
    
    const username = Cypress.env( "username" )
    const password = Cypress.env( "password" )

    it( "Requires an email", () => {

    } )

    it( "Requires a password", () => {

    } )
  } )
} )
