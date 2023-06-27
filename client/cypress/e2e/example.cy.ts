// https://on.cypress.io/api

describe('A user', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Topick');
  });
});
