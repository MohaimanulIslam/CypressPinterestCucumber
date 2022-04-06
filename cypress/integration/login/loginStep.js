import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.pinterest.com/"
Given('I open Pinterst page', () => {
    cy.visit(url);
  });
