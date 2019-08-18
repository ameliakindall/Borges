declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login via POST request to the ?controller=authentication route
     * @example cy.login('username@bogus.com', 'mypassword')
    */
    login(value: string): Chainable<Element>
  }
}
