describe('E2E tests for the success page', () => {
  beforeEach(() => {
    cy.viewport(390, 844);
    cy.intercept('GET', 'api/products', { fixture: 'products.json' });
    cy.intercept('POST', 'api/orders', {
      statusCode: 200,
      body: { orderId: 'A7F3-2094' },
    }).as('createOrder');

    // seed a cart, then land on the success page as the payment flow would
    cy.visit('/2/menu');
    cy.get('[data-cy="card-Tiramisu-button"]').click();
    cy.visit('/2/success');
    cy.wait('@createOrder');
  });

  it('shows the paid confirmation, order code, table and lines', () => {
    cy.get('[data-cy="success-title"]').should(
      'have.text',
      'Your order has been placed',
    );
    cy.get('[data-cy="success-order-code"]').should('have.text', 'A7F3-2094');
    cy.get('[data-cy="success-line-Tiramisu"]').should(
      'contain.text',
      'Tiramisu',
    );
    cy.get('[data-cy="success-line-Tiramisu"]').should(
      'contain.text',
      '$12.00',
    );
    cy.get('[data-cy="success-total"]').should('have.text', '$12.00');
  });

  it('"order something else" clears the cart and returns to the menu', () => {
    cy.get('[data-cy="order-more-button"]').click();
    cy.url().should('include', '/2/menu');
    // cart was cleared once the order was placed
    cy.get('[data-cy="card-Tiramisu-button"]').should('exist');
    cy.get('[data-cy="order-bar"]').should('not.exist');
  });

  it('creates the order only once', () => {
    cy.get('@createOrder.all').should('have.length', 1);
  });
});
