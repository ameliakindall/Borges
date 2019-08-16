/// <reference types="cypress" />

//This is a custom command for logging in via http request
Cypress.Commands.add( "login", ( email, password ) => {

  cy.request( {
    method: "POST",
    url: "?controller=authentication",
    form: true,
    followRedirect: false,
    body: {
      email: email,
      passwd: password,
      back: "my-account",
      SubmitLogin: null
    }
  } ).then((response) => {
    expect(response.status).to.eq(302)
    expect(response.redirectedToUrl).to.eq("http://automationpractice.com/index.php?controller=my-account")
  })

} )
