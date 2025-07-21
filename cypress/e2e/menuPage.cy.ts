describe('E2E Tests for Menu Page', () => {
  it('should return 200 status code for products API', () => {
    cy.intercept('GET', 'api/products').as('getProducts');
    cy.visit('/2/menu');
    cy.wait('@getProducts').its('response.statusCode').should('eq', 200);
  });

  beforeEach(() => {
    cy.visit('/2/menu');
  });

  it('Should load and display products', () => {
    cy.get('[data-cy="product-card"]').should('have.length.at.least', 1);
    cy.get('[data-cy="product-card"]')
      .first()
      .within(() => {
        cy.get('[data-cy="card-img"]').should('exist');
        cy.get('[data-cy="card-name"]').should('exist');
        cy.get('[data-cy="card-price"]').should('exist');
        cy.get('[data-cy="card-button"]').should('exist');
      });
  });
});
