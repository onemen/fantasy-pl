describe('app', () => {
  it('works', () => {
    cy.visit('/');
    cy.wait(500); // wait for rehydration
    cy.findAllByRole('link', { name: 'ארכיון' }).first().click();
    cy.url().should('eq', 'http://localhost:8000/blog');
    cy.findByLabelText('חיפוש בארכיון');
  });
});
