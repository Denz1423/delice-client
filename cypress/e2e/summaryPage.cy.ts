describe('E2E tests for the summary page (mobile)', () => {
  beforeEach(() => {
    cy.viewport(390, 844);
    cy.intercept('GET', 'api/products', { fixture: 'products.json' }).as(
      'getProducts',
    );
  });

  describe('empty cart', () => {
    beforeEach(() => {
      cy.visit('/2/summary');
    });

    it('shows the empty state with a back button and no checkout', () => {
      cy.get('[data-cy="summary-empty"]').should('exist');
      cy.get('[data-cy="summary-back"]').should('exist');
      cy.get('[data-cy="browse-menu-button"]').should('exist');
      cy.get('[data-cy="checkout-button"]').should('not.exist');
    });

    it('the back and browse buttons return to the menu', () => {
      cy.get('[data-cy="summary-back"]').click();
      cy.url().should('include', '/2/menu');

      cy.visit('/2/summary');
      cy.get('[data-cy="browse-menu-button"]').click();
      cy.url().should('include', '/2/menu');
    });
  });

  describe('with items', () => {
    beforeEach(() => {
      cy.visit('/2/menu');
      cy.get('[data-cy="card-Tiramisu-button"]').click();
      cy.get('[data-cy="view-order-button"]').click();
      cy.url().should('include', '/2/summary');
    });

    it('renders the ledger: line, unit price, note field, total and checkout', () => {
      cy.get('[data-cy="summary-title"]').should('have.text', 'Your order');
      cy.get('[data-cy="summaryProduct-Tiramisu-container"]').should('exist');
      cy.get('[data-cy="summaryProduct-Tiramisu"]').should(
        'have.text',
        'Tiramisu',
      );
      cy.get('[data-cy="summaryProduct-Tiramisu-img"]').should('exist');
      cy.get('[data-cy="summaryProduct-Tiramisu-unitprice"]').should(
        'have.text',
        '$12.00 each',
      );
      cy.get('[data-cy="summaryProduct-Tiramisu-linetotal"]').should(
        'have.text',
        '$12.00',
      );
      cy.get('[data-cy="kitchen-note"]').should('exist');
      cy.get('[data-cy="summary-total"]').should('have.text', '$12.00');
      cy.get('[data-cy="checkout-button"]').should('exist');
    });

    it('adjusts quantity with the line stepper', () => {
      cy.get('[data-cy="summaryProduct-Tiramisu-quantity"]').should(
        'have.text',
        '1',
      );

      cy.get('[data-cy="summaryProduct-Tiramisu-increment"]').click();
      cy.get('[data-cy="summaryProduct-Tiramisu-quantity"]').should(
        'have.text',
        '2',
      );
      cy.get('[data-cy="summaryProduct-Tiramisu-linetotal"]').should(
        'have.text',
        '$24.00',
      );
      cy.get('[data-cy="summary-total"]').should('have.text', '$24.00');

      cy.get('[data-cy="summaryProduct-Tiramisu-decrement"]').click();
      cy.get('[data-cy="summaryProduct-Tiramisu-linetotal"]').should(
        'have.text',
        '$12.00',
      );
    });

    it('taking a line to zero removes it and shows the empty state', () => {
      cy.get('[data-cy="summaryProduct-Tiramisu-decrement"]').click();
      cy.get('[data-cy="summaryProduct-Tiramisu-container"]').should(
        'not.exist',
      );
      cy.get('[data-cy="summary-empty"]').should('exist');
      cy.get('[data-cy="checkout-button"]').should('not.exist');
    });

    it('persists the kitchen note across a reload', () => {
      cy.get('[data-cy="kitchen-note"]').type('No nuts please');
      cy.reload();
      cy.get('[data-cy="kitchen-note"]').should('have.value', 'No nuts please');
    });

    it('checkout navigates to the checkout page', () => {
      cy.get('[data-cy="checkout-button"]').click();
      cy.url().should('include', '/2/checkout');
    });
  });
});
