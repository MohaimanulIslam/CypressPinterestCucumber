import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators"

const locators = new Login();

const url = "https://www.pinterest.com/"
Given('I open Pinterst page', () => {
    cy.visit(url);
  });

When('User click on login', () => {
    cy.get(locators.cliclOnlogin).click();
  });

And('User enter email address', () => {
    cy.get(locators.email).type('miraz.qups@gmail.com');
  });

And('User enter password', () => {
    cy.get(locators.pass).type("TestCase0101");
  });

Then('User click on login button', () => {
    cy.get(locators.login).click();
  });


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
