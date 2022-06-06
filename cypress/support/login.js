Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('#usaSVG').click();
  cy.get('#username').type('Moskal1');
  cy.get('#password').type('qwerty123');
  cy.get('#submit').click();
});
