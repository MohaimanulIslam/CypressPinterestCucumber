import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I click on bell icon', function() {

  // cy.waitUntil(() => cy.window().then(win => win.foo === "bar"));

  cy.waitUntil(() => cy.get('[style="height:100%;width:100%"]').wait(8000).click());
  // cy.get('[style="height:100%;width:100%"]').click();

  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

  
// npx cypress run cy:allure --browser chrome

