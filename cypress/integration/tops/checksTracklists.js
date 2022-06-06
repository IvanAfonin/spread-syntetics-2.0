describe('Check tracklist elements', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Check tracklist input', () => {
    cy.get('#stock_input_0').click().type('AAPL');
    cy.get('#strikeFirst_input_0').click().type('150');
    cy.contains('AAPL');
    cy.contains('150');
  });
});
