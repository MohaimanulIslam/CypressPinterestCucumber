import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const locator = new Login();

const url = "https://www.pinterest.com/"
Given('I open Pinterst page', () => {
    cy.visit(url);
  });

When('User click on login', () => {
    cy.get(locator.cliclOnlogin).click();
  });

And('User enter email address', () => {
    cy.get(locator.email).type('miraz.qups@gmail.com');
  });

And('User enter password', () => {
    cy.get(locator.pass).type("TestCase0101");
  });

Then('User click on login button', () => {
    cy.get(locator.login).click();
  });


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
