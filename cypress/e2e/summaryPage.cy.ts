import { testActions } from '@/testing/testUtils';

describe('E2E tests for summary page', () => {
  describe('Summary page with no products', () => {
    beforeEach(() => {
      cy.visit('/2/summary');
      cy.window()
        .its('store')
        .then((store) => {
          store.dispatch(testActions.setTableNumber(2));
        });
    });

    it('Should be able to visit the summary page and view all relevant elements', () => {
      cy.url().should('include', '/2/summary');
      cy.get('[data-cy="header-container"]').should('exist');
      cy.get('[data-cy="cartSummary-title"]').should('exist');
      cy.get('[data-cy="emptyCart-title"]').should('exist');
      cy.get('[data-cy="home-button"]').should('exist');
      cy.get('[data-cy="checkout-button"]').should('not.exist');
    });

    it('Should be able to navigate back to the menu page using home button', () => {
      cy.get('[data-cy="home-button"]').click();
      cy.url().should('include', '/2/menu');
    });

    it('Should be able to navigate back to the menu page using the logo', () => {
      cy.get('[data-cy="delice-logo"]').click();
      cy.url().should('include', '/2/menu');
    });
  });

  describe('Test summary page features', () => {
    beforeEach(() => {
      cy.visit('/2/menu');
      cy.window()
        .its('store')
        .then((store) => {
          store.dispatch(testActions.setTableNumber(2));
        });
      cy.get('[data-cy="card-Tiramisu-button"]').click();
      cy.get('[data-cy="cartIcon-container"]').click();
    });

    it('Should be able to see the product in the cart after adding it', () => {
      cy.url().should('include', '/2/summary');
      cy.get('[data-cy="emptyCart-title"]').should('not.exist');
      cy.get('[data-cy="home-button"]').should('not.exist');
      cy.get('[data-cy="checkout-button"]').should('exist');
      cy.get('[data-cy="summaryProduct-Tiramisu-img"]').should('exist');
      cy.get('[data-cy="summaryProduct-Tiramisu"]').should('exist');
      cy.get('[data-cy="summaryProduct-Tiramisu-price"]').should('exist');
      cy.get('[data-cy="summaryProduct-Tiramisu-remove"]').should('exist');
      cy.get('[data-cy="summaryProduct-Tiramisu-quantity"]').should('exist');
      cy.get('[data-cy="summaryProduct-Tiramisu-add"]').should('exist');
    });

    it('Should be able to modify quantity of the product', () => {
      cy.get('[data-cy="summaryProduct-Tiramisu-quantity"]').should(
        'have.text',
        1,
      );
      cy.get('[data-cy="summaryProduct-Tiramisu-price"]').should(
        'have.text',
        '$12',
      );
      cy.get('[data-cy="summaryProduct-Tiramisu-add"]').click();
      cy.get('[data-cy="summaryProduct-Tiramisu-quantity"]').should(
        'have.text',
        2,
      );
      cy.get('[data-cy="summaryProduct-Tiramisu-price"]').should(
        'have.text',
        '$24',
      );
      cy.get('[data-cy="summaryProduct-Tiramisu-add"]').click();
      cy.get('[data-cy="summaryProduct-Tiramisu-price"]').should(
        'have.text',
        '$36',
      );
      cy.get('[data-cy="summaryProduct-Tiramisu-remove"]').click();
      cy.get('[data-cy="summaryProduct-Tiramisu-price"]').should(
        'have.text',
        '$24',
      );
    });

    it('Should be able to remove all items from cart and display the no item in cart elements', () => {
      cy.get('[data-cy="summaryProduct-Tiramisu-remove"]').click();
      cy.get('[data-cy="checkout-button"]').should('not.exist');
      cy.get('[data-cy="emptyCart-title"]').should('exist');
      cy.get('[data-cy="home-button"]').should('exist');
    });
  });

  describe('Multiple products test', () => {
    it('Should be able to add multiple products to cart and view them in the summary page', () => {
      cy.visit('/2/menu');
      cy.window()
        .its('store')
        .then((store) => {
          store.dispatch(testActions.setTableNumber(2));
        });
      cy.get('[data-cy="card-CheeseCake-button"]').click();
      cy.get('[data-cy="card-Chocolate Cake-button"]').click();
      cy.get('[data-cy="card-Macaroon-button"]').click();
      cy.get('[data-cy="card-Oreo Cake-button"]').click();
      cy.get('[data-cy="cart-count"]').should('contain.text', '4');
      cy.get('[data-cy="cartIcon-container"]').click();
      cy.get('[data-cy="cart-total"]').should('contain.text', 'Total: $45');
      cy.get('[data-cy="summaryProduct-CheeseCake-container"]').should('exist');
      cy.get('[data-cy="summaryProduct-Chocolate Cake-container"]').should(
        'exist',
      );
      cy.get('[data-cy="summaryProduct-Macaroon-container"]').should('exist');
      cy.get('[data-cy="summaryProduct-Oreo Cake-container"]').should('exist');
    });
  });
});
