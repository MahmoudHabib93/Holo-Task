describe('Scenario 2: Check filter by department in Deals and Promotions page', () => {
    it('Should filter deals by Software department', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://www.amazon.com/');
      cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click({force: true});
      cy.get('.a-size-base.a-link-normal').click();
      cy.get('[data-testid="filter-departments-491286"] > label > .a-label > .a-size-base').contains('Software') // This will locate the element with text "Software"
      .click({force: true});
  
      cy.get('[data-testid="filter-departments-Software"]').should('contain', 'Software');
    });
  });
  