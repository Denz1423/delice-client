describe('E2E Tests for Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits Delice', () => {
    cy.contains('See the menu').should('exist');
  });

  it('keeps the continue button disabled until a table is chosen', () => {
    cy.get('[data-cy="submit"]').should('be.disabled');
    cy.get('[data-cy="table-value"]').should('have.text', '');

    cy.get('[data-cy="table-increment"]').click();

    cy.get('[data-cy="table-value"]').should('have.text', '1');
    cy.get('[data-cy="submit"]').should('not.be.disabled');
  });

  it('lets the user pick a table number with the steppers and continue', () => {
    cy.get('[data-cy="table-increment"]').click().click();
    cy.get('[data-cy="table-value"]').should('have.text', '2');

    cy.get('[data-cy="submit"]').click();
    cy.url().should('include', '/2/menu');
  });

  it('lets the user type a table number and continue', () => {
    cy.get('body').type('7');
    cy.get('[data-cy="table-value"]').should('have.text', '7');

    cy.get('[data-cy="submit"]').click();
    cy.url().should('include', '/7/menu');
  });

  it('clamps input to the 1-20 range', () => {
    cy.get('body').type('9');
    cy.get('[data-cy="table-increment"]').click();
    cy.get('[data-cy="table-value"]').should('have.text', '10');

    // "25" is rejected as a pair and falls back to the single digit 5
    cy.get('body').type('25');
    cy.get('[data-cy="table-value"]').should('have.text', '5');

    // backspace clears the selection and re-disables the button
    cy.get('body').type('{backspace}');
    cy.get('[data-cy="table-value"]').should('have.text', '');
    cy.get('[data-cy="submit"]').should('be.disabled');
  });

  it('does not increment past table 20', () => {
    cy.get('body').type('18');
    Cypress._.times(6, () => cy.get('[data-cy="table-increment"]').click());
    cy.get('[data-cy="table-value"]').should('have.text', '20');
  });

  it('does not open the keypad on desktop widths', () => {
    cy.viewport(1280, 800);
    cy.get('[data-cy="table-digits"]').click();
    cy.get('[data-cy="keypad"]').should('not.exist');
    cy.get('[data-cy="table-increment"]').should('be.visible');
  });

  describe('mobile keypad (mockup 4a)', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
    });

    it('opens the keypad when the number is tapped and enters a table', () => {
      cy.get('[data-cy="keypad"]').should('not.exist');

      cy.get('[data-cy="table-digits"]').click();
      cy.get('[data-cy="keypad"]').should('be.visible');
      cy.get('[data-cy="table-decrement"]').should('not.exist');

      cy.get('[data-cy="keypad-1"]').click();
      cy.get('[data-cy="keypad-2"]').click();
      cy.get('[data-cy="table-value"]').should('have.text', '12');

      cy.get('[data-cy="keypad-done"]').click();
      cy.get('[data-cy="keypad"]').should('not.exist');
      cy.get('[data-cy="table-decrement"]').should('be.visible');

      cy.get('[data-cy="submit"]').click();
      cy.url().should('include', '/12/menu');
    });

    it('deletes digits and re-disables the button when cleared', () => {
      cy.get('[data-cy="table-digits"]').click();
      cy.get('[data-cy="keypad-1"]').click();
      cy.get('[data-cy="keypad-5"]').click();
      cy.get('[data-cy="table-value"]').should('have.text', '15');

      cy.get('[data-cy="keypad-delete"]').click();
      cy.get('[data-cy="table-value"]').should('have.text', '1');

      cy.get('[data-cy="keypad-delete"]').click();
      cy.get('[data-cy="table-value"]').should('have.text', '');
      cy.get('[data-cy="submit"]').should('be.disabled');
    });

    it('rejects an out-of-range pair and falls back to a single digit', () => {
      cy.get('[data-cy="table-digits"]').click();
      cy.get('[data-cy="keypad-2"]').click();
      cy.get('[data-cy="keypad-5"]').click();
      cy.get('[data-cy="table-value"]').should('have.text', '5');
    });
  });
});
