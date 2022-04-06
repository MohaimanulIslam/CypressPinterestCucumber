import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.pinterest.com/"
Given('I open Pinterst page', () => {
    cy.visit(url);
  });

When('User click on login', () => {
    cy.get('[data-test-id="simple-login-button"] > .oRi > .RCK').click();
  });

And('User enter email address', () => {
    cy.get('#email').type('miraz.qups@gmail.com');
  });

And('User enter password', () => {
    cy.get('#password').type("TestCase0101");
  });

Then('User click on login button', () => {
    cy.get('.red > .zI7').click();
  });
