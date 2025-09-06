import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

describe('Fluxo de compra', () => {

  beforeEach(() => {
  cy.fixture('users').then((users) => {
    cy.login(users.standard_user.username, users.standard_user.password);
  });
});

  it('Adicionar produto ao carrinho e iniciar checkout', () => {
    ProductsPage.addToCart('Sauce Labs Backpack');
    ProductsPage.goToCart();
    CartPage.checkout();
    cy.url().should('include', 'checkout-step-one.html');
  });

  it('Adicionar múltiplos produtos ao carrinho', () => {
    ProductsPage.addToCart('Sauce Labs Backpack');
    ProductsPage.addToCart('Sauce Labs Bike Light');
    ProductsPage.goToCart();
    cy.get('.cart_item').should('have.length', 2);
  });
});
