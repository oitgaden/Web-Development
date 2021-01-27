describe('Visit home page', () => {
it('Visit home page', () => {

    cy.visit('http://localhost:5500');

    cy.contains('First Section');

    cy.contains('Second Section');

  });
});