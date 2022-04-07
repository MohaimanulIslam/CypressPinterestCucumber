import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

const url = "https://www.pinterest.com/"
Given('I open Pinterst page', () => {
    cy.visit(url);
  });

When('User click on login', () => {
    loginPage.clickOnLoginButton().click();
  });

And('User enter email address', () => {
    loginPage.enterUserEmail().type('miraz.qups@gmail.com');
  });

And('User enter password', () => {
    loginPage.enterUserPass().type("TestCase0101");
  });

Then('User click on login button', () => {
    loginPage.clickOnLogin().click();
  });


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
