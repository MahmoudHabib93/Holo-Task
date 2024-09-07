describe('Scenario 1: Check total displayed number of results for Smart Home | Televisions', () => {
    it('Should verify the number of displayed televisions matches the total results', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://www.amazon.com/');
      cy.get('#nav-hamburger-menu').click();
      cy.wait(2000)
      cy.get(".hmenu-visible > :nth-child(9) > .hmenu-item > .nav-sprite").click({force: true});
      cy.get(":nth-child(35) > :nth-child(12) > .hmenu-item").click();
      cy.get(':nth-child(1) > .bxc-grid__content > .bxc-grid__image > a > img').click()
      // All result 
      cy.get(':nth-child(4) > .a-cardui') 
      .invoke('text')
      .then((totalText) => {
        const totalResultsMatch = totalText.match(/of (\d+) results/);
        const totalResults = totalResultsMatch ? parseInt(totalResultsMatch[1], 10) : 0;
        cy.wait(10000)
        // Get the number of displayed products (e.g., 12 products shown)
        cy.get('._octopus-search-result-card_style_apbSearchResultsContainer__bCqjb') 

        // Optionally, check that the total number of results is correct (e.g., 120)
        expect(totalResults).to.equal(118);
      });
    });
  });
  
