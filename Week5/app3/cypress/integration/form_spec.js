describe('Visit form page', () => {
it('Visit form page', () => {

    cy.visit('http://localhost:5500');

    cy.contains('Form Example').click();

    cy.contains('Student Registration');

  });

  it('Display input errors', () => {
  
      cy.visit('http://localhost:5500');
  
      cy.contains('Form Example').click();
  
      cy.get('input[type=button]').click();

      cy.contains('Please enter first name');

      cy.contains('Please enter last name');
  
    });
});