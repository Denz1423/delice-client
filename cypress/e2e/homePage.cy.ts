describe('E2E Tests for Home Page', () => {
  it('Visits Delice', () => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Users Should be able to type their table number', () => {
    cy.get('[data-cy="tableInput"]').type('2');
    cy.get('[data-cy="tableInput"]').should('have.value', '2');
    cy.get('[data-cy="submit"]').click();
    cy.url().should('include', '/2/menu');
  });

  it('Should show an error when no table number entered', () => {
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="tableInput-error"]').should(
      'contain',
      'Please enter your table number',
    );
  });

  it('Should show an error for table number less than 1 or above 20', () => {
    cy.get('[data-cy="tableInput"]').type('0');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="tableInput-error"]').should(
      'contain',
      'Table number does not exist (1-20 only)',
    );

    cy.get('[data-cy="tableInput"]').clear();

    cy.get('[data-cy="tableInput"]').type('21');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="tableInput-error"]').should(
      'contain',
      'Table number does not exist (1-20 only)',
    );
  });
});
