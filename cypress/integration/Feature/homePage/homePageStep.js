import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I click on bell icon', () => {
  cy.get('[style="height:100%;width:100%"]').click();
  });

