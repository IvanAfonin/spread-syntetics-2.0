describe('Check login elements', () => {
  it('Check modal availability', () => {
    cy.get('Choose your intrested region').should('be.visible');
  });
});
