import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I click on bell icon', function() {

  // cy.get('[style="height:100%;width:100%"]', { timeout: 10000 }).should('be.visible');
  cy.get('[style="height:100%;width:100%"]').click();

  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

  
// npx cypress run cy:allure --browser chrome

