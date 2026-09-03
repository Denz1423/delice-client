describe('E2E tests for the checkout page', () => {
  // Stripe.js (cross-origin) throws on the stubbed clientSecret — the app itself
  // renders fine, and we are not exercising the real payment integration here.
  Cypress.on('uncaught:exception', (err) => {
    if (
      err.message.includes('Script error') ||
      err.message.includes('Stripe') ||
      err.message.includes('IntegrationError')
    ) {
      return false;
    }
    return true;
  });

  beforeEach(() => {
    cy.viewport(390, 844);
    cy.intercept('GET', 'api/products', { fixture: 'products.json' });
    cy.intercept('POST', 'api/payment', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          ...req.body,
          clientSecret:
            'pi_1AbCdEfGhIjKlMnOpQrStUvWx_secret_AbCdEfGhIjKlMnOpQrStUvWxYz',
          paymentIntentId: 'pi_1AbCdEfGhIjKlMnOpQrStUvWx',
        },
      });
    }).as('paymentIntent');

    cy.visit('/2/menu');
    cy.get('[data-cy="card-Tiramisu-button"]').click();
    cy.get('[data-cy="view-order-button"]').click();
    cy.get('[data-cy="checkout-button"]').click();
    cy.url().should('include', '/2/checkout');
    cy.wait('@paymentIntent');
  });

  it('shows the order lines, total and pay button', () => {
    cy.get('[data-cy="checkout-title"]').should('have.text', 'Checkout');

    cy.get('[data-cy="checkout-line-Tiramisu"]').should(
      'contain.text',
      'Tiramisu',
    );
    cy.get('[data-cy="checkout-line-Tiramisu"]').should(
      'contain.text',
      '$12.00',
    );
    cy.get('[data-cy="checkout-total"]').should('have.text', '$12.00');
    cy.get('[data-cy="pay-button"]').should('contain.text', 'Pay $12.00');
  });

  it('the back button returns to the summary', () => {
    cy.get('[data-cy="checkout-back"]').click();
    cy.url().should('include', '/2/summary');
  });
});
