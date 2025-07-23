import { testActions } from '@/testing/testUtils';

describe('E2E Tests for Menu Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'api/products').as('getProducts');
    cy.visit('/2/menu');
    cy.window()
      .its('store')
      .then((store) => {
        store.dispatch(testActions.setTableNumber(2));
      });
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

  it('Should display the header with all its elements', () => {
    cy.get('[data-cy="header-container"]').should('exist');
    cy.get('[data-cy="delice-logo"]').should('exist');
    cy.get('[data-cy="tableNumber-container"]').should('exist');
    cy.get('[data-cy="tableNumber-container"]').should(
      'contain.text',
      'Table 2',
    );
    cy.get('[data-cy="cartIcon-container"]').should('exist');
    cy.get('[data-cy="shopping-icon"]').should('exist');
    cy.get('[data-cy="cart-count"]').should('exist');
    cy.get('[data-cy="cart-count"]').should('contain.text', '0');
  });

  it('Should be able to add a product to cart', () => {
    cy.get('[data-cy="card-Tiramisu-button"]').click();
    cy.get('[data-cy="cart-count"]').should('contain.text', '1');
    cy.get('[data-cy="card-Oreo Cake-button"]').click();
    cy.get('[data-cy="cart-count"]').should('contain.text', '2');
  });

  it('Should be able to navigate to summary page', () => {
    cy.get('[data-cy="cartIcon-container"]').click();
    cy.url().should('include', '/2/summary');
  });
});
