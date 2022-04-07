import Login from "../utils/locators"

const locator = new Login();

class LoginPage{


    clickOnLoginButton(){
        return cy.get(locator.cliclOnlogin);
    }

    enterUserEmail(){
        return cy.get(locator.email);
    }

    enterUserPass(){
        return cy.get(locator.pass);
    }

    clickOnLogin(){
        return cy.get(locator.login);
    }



}

export default LoginPage;
