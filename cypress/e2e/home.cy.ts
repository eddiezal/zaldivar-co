describe('Home Page Tests', () => {
    it('Visits the homepage', () => {
      cy.visit('/');
      cy.contains('Welcome to Zaldivar & Co.'); // Change this text if necessary
    });
  
    it('Navigates to the About Page', () => {
      cy.contains('About').click();
      cy.url().should('include', '/about');
    });
  
    it('Navigates to the Case Studies Page', () => {
      cy.contains('Case Studies').click();
      cy.url().should('include', '/case-studies');
    });
  });
  