describe('Scenario 4: Check Product Details Page', () => {
    it('Should verify product details including stock, price, rating, and add to cart functionality', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://www.amazon.eg/');
      cy.get("#icp-nav-flyout").click()
      cy.get("body > div:nth-child(1) > div:nth-child(26) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)").click()
      cy.get(".a-button-input").click()
      cy.wait(2000)
      cy.get('#searchDropdownBox').select('Electronics', {force: true});
      cy.get('#twotabsearchtextbox').type('Apple{enter}');
      
      cy.get('[data-asin="B0CHWRXH8B"] > .sg-col-inner').first().click();
      cy.wait(10000)    

    // Verify In/Out of Stock status
    cy.get('#availability') 
      .should('exist') 
      .invoke('text')
      .then((stockText) => {
        expect(stockText.trim()).to.equal('In Stock'); // Ensure the product is in stock
      });

    // Verify the Price
    cy.get('#corePrice_feature_div > [data-csa-c-type="widget"] > .a-section') 
      .should('exist') // Ensure the price element exists
      .invoke('text')
      .then((priceText) => {
        expect(priceText.trim()).to.contain("EGP11,198.00"); // Ensure the price matches the expected value
      });

    // Verify the Rating (if visible)
    cy.get('#averageCustomerReviews > [data-action="acrStarsLink-click-metrics"] > #acrPopover') 
      .should('exist') // Ensure the rating element exists
      .invoke('text')
      .then((ratingText) => {
        const rating = parseFloat(ratingText); // Convert the rating text to a number
        expect(rating).to.be.within(0, 5); // Ensure the rating is between 0 and 5
      });

    // Verify Shipping Details
    cy.get('#mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE')
      .should('exist') // Ensure the shipping details element exists
      .invoke('text')
      .then((shippingText) => {
        expect(shippingText.trim()).to.contain('FREE delivery Monday, 9 September'); // Ensure the shipping details contain the expected delivery date
      });
    // add to cart
    cy.get("#add-to-cart-button").click();
    cy.wait(2000)
    cy.get("input[aria-labelledby='attachSiNoCoverage-announce']").click();
    cy.wait(2000)
    cy.get('#sw-atc-details-single-container').click()
    cy.get('#nav-cart').click()
    
    });
  });
  