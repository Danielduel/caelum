/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByTestId(testId: string): Chainable<any>;

    getByTestIdLike(testId: string): Chainable<any>;
  }
}
