describe('Login Tests', () => {
  it('Deve logar com sucesso', () => {
    cy.login();
    cy.url().should('include', 'inventory.html');
    cy.contains('Products').should('be.visible');
  });
});
