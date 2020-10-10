///<reference types="cypress" />
///<reference types="@testing-library/cypress" />

// Define at the top of the spec file or just import it
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task('table', violationData);
}

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe();
  });

  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y(null, null, terminalLog);
  });

  it('Navigates to page /blog and checks for accessibility violations', () => {
    cy.findAllByRole('link', { name: 'ארכיון' })
      .first()
      .click()
      .checkA11y(null, null, terminalLog);
    cy.url().should('eq', 'http://localhost:8000/blog');
    cy.findByRole('button', { name: 'פנטזי א-ב' })
      .click()
      .checkA11y(null, null, terminalLog);
  });

  it('Navigates to page /basic and checks for accessibility violations', () => {
    cy.findAllByRole('link', { name: 'פנטזי א-ב' })
      .first()
      .click()
      .checkA11y(null, null, terminalLog);
    cy.url().should('eq', 'http://localhost:8000/basic');
  });

  it('Navigates to page /about and checks for accessibility violations', () => {
    cy.findAllByRole('link', { name: 'אודות' })
      .first()
      .click()
      .checkA11y(null, null, terminalLog);
    cy.url().should('eq', 'http://localhost:8000/about');
  });

  it('Navigates to page /contact and checks for accessibility violations', () => {
    cy.findAllByRole('link', { name: 'כתבו לנו' })
      .first()
      .click()
      .checkA11y(null, null, terminalLog);
    cy.url().should('eq', 'http://localhost:8000/contact');
  });

  it('Navigates to blog pages and checks for accessibility violations', () => {
    cy.findAllByRole('link', { name: 'פנטזי א-ב' }).first().click();
    cy.wait(200);

    const pages = [
      'פנטזי פרמייר ליג - איך מתחילים',
      'פנטזי פרמייר ליג – החוקים',
      "איך בונים קבוצה - טיפים למנג'ר המתחיל",
      'חילופים - ככה עושים את זה נכון',
      "הצ'יפים שלנו",
    ];

    for (const name of pages) {
      cy.findByRole('heading', { name }).click();
      cy.wait(200);
      cy.checkA11y(null, null, terminalLog);
      cy.go('back', { timeout: 200 });
    }
  });
});
