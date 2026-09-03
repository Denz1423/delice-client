describe('404 page', () => {
  it('renders the docket for an unknown top-level path', () => {
    cy.visit('/no-such-page', { failOnStatusCode: false });

    cy.get('[data-cy="error-title"]').should('have.text', 'Not on file.');
    cy.get('[data-cy="error-receipt"]').should('contain.text', '404');
    cy.get('[data-cy="error-receipt"]').should(
      'contain.text',
      'ITEM NOT FOUND',
    );
    cy.get('[data-cy="error-receipt"]').should('contain.text', '$0.00');
  });

  it('keeps the table context for an unknown path under a table', () => {
    cy.visit('/2/no-such-page', { failOnStatusCode: false });

    cy.get('[data-cy="error-title"]').should('exist');
    cy.get('[data-cy="error-back"]')
      .should('have.text', 'Back to the menu')
      .click();
    cy.url().should('include', '/2/menu');
  });

  it('goes home when the path carries no table, even with a stale stored one', () => {
    cy.visit('/nope', {
      failOnStatusCode: false,
      onBeforeLoad: (win) => win.localStorage.setItem('tableNumber', '7'),
    });

    cy.get('[data-cy="error-back"]')
      .should('have.text', 'Back to the start')
      .click();
    cy.url().should('match', /localhost:\d+\/$/);
  });
});
