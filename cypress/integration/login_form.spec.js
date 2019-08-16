/// <reference types="cypress" />

describe("Login form", () => {
  it("test that the login custom command works", () => {
    cy.visit('/')
    cy.login('amelia.kindall@gmail.com', 'asdf123')
    cy.visit("http://automationpractice.com/index.php?controller=my-account")
  })
})
