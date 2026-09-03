describe('E2E Tests for Menu Page', () => {
  beforeEach(() => {
    // stub + delay so the loading skeleton is deterministically observable
    cy.intercept('GET', 'api/products', {
      delay: 600,
      fixture: 'products.json',
    }).as('getProducts');
    cy.visit('/2/menu');
  });

  it('should return 200 status code for products API', () => {
    cy.wait('@getProducts').its('response.statusCode').should('eq', 200);
  });

  it('Should display product skeleton when fetching products', () => {
    cy.get('[data-cy="skeleton-card"]').should('have.length', 6);
    cy.get('[data-cy="skeleton-image"]').should('exist');
    cy.get('[data-cy="skeleton-name"]').should('exist');
    cy.get('[data-cy="skeleton-price"]').should('exist');
    cy.get('[data-cy="skeleton-button"]').should('exist');
  });

  it('Should not display card skeleton when products are fetched', () => {
    cy.get('[data-cy="skeleton-card"]').should('not.exist');
  });

  it('Should load and display products, check first product', () => {
    cy.get('[data-cy="product-grid"]').should('have.length.at.least', 1);
    cy.get('[data-cy="product-grid"]')
      .first()
      .within(() => {
        cy.get('[data-cy="card-Tiramisu-img"]').should('exist');
        cy.get('[data-cy="card-Tiramisu"]').should('exist');
        cy.get('[data-cy="card-Tiramisu-price"]').should('exist');
        cy.get('[data-cy="card-Tiramisu-button"]').should('exist');
      });
  });

  it('Should display the menu header with its elements', () => {
    cy.get('[data-cy="header-container"]').should('exist');
    cy.get('[data-cy="delice-logo"]').should('exist');
    cy.get('[data-cy="tableNumber-container"]').should('exist');
    cy.get('[data-cy="tableNumber-container"]').should(
      'contain.text',
      'Table 2',
    );
    cy.get('[data-cy="menu-tabs"]').should('exist');
  });

  it('the logo is a link back to the menu', () => {
    cy.get('[data-cy="delice-logo"]').should('match', 'button').click();
    cy.url().should('include', '/2/menu');
    cy.get('[data-cy="menu-tabs"]').should('exist');
  });

  it('Should show All / Cakes / Drinks tabs and filter by category', () => {
    cy.get('[data-cy="tab-all"]').should('exist');
    cy.get('[data-cy="tab-cake"]').should('exist');
    cy.get('[data-cy="tab-drink"]').should('exist');

    // All: both categories present, section headers shown
    cy.get('[data-cy="card-Tiramisu"]').should('exist');
    cy.get('[data-cy="card-Black Coffee"]').should('exist');
    cy.get('[data-cy="section-header"]').should('have.length', 2);

    // Drinks only
    cy.get('[data-cy="tab-drink"]').click();
    cy.get('[data-cy="tab-drink"]').should(
      'have.attr',
      'aria-selected',
      'true',
    );
    cy.get('[data-cy="card-Tiramisu"]').should('not.exist');
    cy.get('[data-cy="card-Black Coffee"]').should('exist');
    cy.get('[data-cy="section-header"]').should('not.exist');

    // Cakes only
    cy.get('[data-cy="tab-cake"]').click();
    cy.get('[data-cy="card-Tiramisu"]').should('exist');
    cy.get('[data-cy="card-Black Coffee"]').should('not.exist');
  });

  it('Should add a product from the card and adjust it with the stepper', () => {
    cy.get('[data-cy="card-Tiramisu-button"]').click();
    cy.get('[data-cy="card-Tiramisu-stepper"]').should('be.visible');
    cy.get('[data-cy="card-Tiramisu-qty"]').should('have.text', '1');

    cy.get('[data-cy="card-Tiramisu-increment"]').click();
    cy.get('[data-cy="card-Tiramisu-qty"]').should('have.text', '2');

    cy.get('[data-cy="card-Tiramisu-decrement"]').click();
    cy.get('[data-cy="card-Tiramisu-decrement"]').click();
    cy.get('[data-cy="card-Tiramisu-button"]').should('exist');
  });

  describe('Order panel (>= 1100px)', () => {
    beforeEach(() => {
      cy.viewport(1440, 900);
    });

    it('shows an empty state and a disabled checkout button', () => {
      cy.get('[data-cy="order-panel"]').should('be.visible');
      cy.get('[data-cy="order-panel"]').should('contain.text', 'empty');
      cy.get('[data-cy="checkout-button"]').should('be.disabled');
      cy.get('[data-cy="order-bar"]').should('not.exist');
    });

    it('builds from the cart and navigates to checkout', () => {
      cy.get('[data-cy="card-Tiramisu-button"]').click();
      cy.get('[data-cy="order-line-Tiramisu"]').should('be.visible');
      cy.get('[data-cy="order-line-Tiramisu-qty"]').should('have.text', '1');
      cy.get('[data-cy="order-total"]').should('have.text', '$12.00');

      cy.get('[data-cy="card-Chocolate Cake-button"]').click();
      cy.get('[data-cy="order-total"]').should('have.text', '$22.00');

      cy.get('[data-cy="checkout-button"]').should('not.be.disabled').click();
      cy.url().should('include', '/2/checkout');
    });

    it('adjusts a line quantity from the panel stepper', () => {
      cy.get('[data-cy="card-Tiramisu-button"]').click();

      cy.get('[data-cy="order-line-Tiramisu-increment"]').click();
      cy.get('[data-cy="order-line-Tiramisu-increment"]').click();
      cy.get('[data-cy="order-line-Tiramisu-qty"]').should('have.text', '3');
      cy.get('[data-cy="order-total"]').should('have.text', '$36.00');
      // the card stepper stays in sync
      cy.get('[data-cy="card-Tiramisu-qty"]').should('have.text', '3');

      cy.get('[data-cy="order-line-Tiramisu-decrement"]').click();
      cy.get('[data-cy="order-line-Tiramisu-decrement"]').click();
      cy.get('[data-cy="order-line-Tiramisu-decrement"]').click();
      // line removed, panel back to the empty state
      cy.get('[data-cy="order-line-Tiramisu"]').should('not.exist');
      cy.get('[data-cy="order-panel"]').should('contain.text', 'empty');
      cy.get('[data-cy="card-Tiramisu-button"]').should('exist');
    });
  });

  describe('Order bar (< 1100px)', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
    });

    it('appears once the cart has items and links to the summary', () => {
      cy.get('[data-cy="order-panel"]').should('not.be.visible');
      cy.get('[data-cy="order-bar"]').should('not.exist');

      cy.get('[data-cy="card-Tiramisu-button"]').click();
      cy.get('[data-cy="order-bar"]').should('be.visible');
      cy.get('[data-cy="order-bar"]').should('contain.text', '1 item');
      cy.get('[data-cy="order-bar-total"]').should('have.text', '$12.00');

      cy.get('[data-cy="view-order-button"]').click();
      cy.url().should('include', '/2/summary');
    });
  });
});
