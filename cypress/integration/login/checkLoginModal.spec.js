describe('Check login elements', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Check login page', () => {
    cy.contains('Choose your intrested region').should('be.visible');
    cy.get('#europeSVG').should('be.visible');
    cy.get('#usaSVG').should('be.visible');
  });

  it('Check modal availability', () => {
    cy.get('#europeSVG').click();
    cy.contains('Apply').should('be.visible');
  });
});
