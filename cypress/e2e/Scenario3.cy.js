describe('Scenario 3: Check the selected currency displayed for product prices', () => {
    it('Should change currency and verify product prices reflect new currency', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://www.amazon.com/');
      cy.wait(2000)
      cy.get("span[class='icp-nav-link-inner'] span[class='nav-line-2']").click();
      cy.get('#icp-currency-dropdown-selected-item-prompt > .a-button-inner > .a-button-text')
      .click();
      cy.get('#icp-currency-dropdown_23 > :nth-child(1)').click();

      cy.get('#icp-save-button > .a-button-inner > .a-button-input').click();
      cy.wait(2000)
      cy.get('#nav-hamburger-menu').click();
      cy.wait(2000)
      cy.get(".hmenu-visible > :nth-child(9) > .hmenu-item > .nav-sprite").click({force: true});
      cy.get(":nth-child(35) > :nth-child(12) > .hmenu-item").click();
      cy.get(':nth-child(1) > .bxc-grid__content > .bxc-grid__image > a > img').click()
      cy.get('body > div:nth-child(1) > div:nth-child(28) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)').each(($el) => {
        cy.wrap($el).should('contain', 'AED');
      });
    });
  });
  