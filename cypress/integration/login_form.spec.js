/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe("Login form", () => {

  beforeEach( () => {
    cy.visit("/?controller=authentication&back=my-account")
  })

  context("Form elements", () => {
    it("Links to /?controller=password", () => {
      cy.get("#login_form").should("be.visible")
    })
  })
})
