# CypressPinterestCucumber
**Configure Cypress Command**
npm init -y
npm install cypress
npx cypress -v
npx cypress open

**Configure Mocha and Mochaawesome module**
npm install --save-dev mocha
npm install --save-dev mochawesome

**Intall cypress-cucumber-preprocessor**

**Installation**
npm install --save-dev cypress-cucumber-preprocessor

**Configuration cypress-cucumber-preprocessor**

Add it to your plugins:

cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

Add support for feature files to your Cypress configuration

cypress.json

{
  "testFiles": "**/*.feature"
}

**Configuration**
Please make use of cosmiconfig to create a configuration for the plugin, for example, by adding this section to your package.json:

"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

