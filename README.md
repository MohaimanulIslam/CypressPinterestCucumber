# CypressPinterestCucumber

**Configure Cypress Command**
<br>
npm init -y
<br>
npm install cypress
<br>
npx cypress -v
<br>
npx cypress open
<br>

**Configure Mocha and Mochaawesome module**
<br>
npm install --save-dev mocha
<br>
npm install --save-dev mochawesome

**Intall cypress-cucumber-preprocessor**
<br>

**Installation**
<br>
npm install --save-dev cypress-cucumber-preprocessor

**Configuration cypress-cucumber-preprocessor**

Add it to your plugins:

cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default
<br>
module.exports = (on, config) => {<br>
  on('file:preprocessor', cucumber())
<br>}

Add support for feature files to your Cypress configuration

cypress.json
<br>
{<br>
  "testFiles": "**/*.feature"
<br>}

**Configuration**
<br>
Please make use of cosmiconfig to create a configuration for the plugin, for example, by adding this section to your package.json:

"cypress-cucumber-preprocessor": {<br>
  "nonGlobalStepDefinitions": true
<br>}


**cypress-allure-plugin**
<br>
npm i -D @shelex/cypress-allure-plugin
<br>

**Setup**
Connect plugin in cypress/plugins/index.js. Take into account that Cypress generate plugins file with module.exports on the first initialization but you should have only one export section. In order to add Allure writer task just replace it or add writer task somewhere before returning config:
<br>
as only plugin:
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {<br>
    allureWriter(on, config);
    return config;
<br>};

if you have webpack or other preprocessors please set allure writer before returning "config":
module.exports = (on, config) => {<br>
    on('file:preprocessor', webpackPreprocessor);
    allureWriter(on, config);
    return config;
<br>};
Register commands in cypress/support/index.js file:
<br>
with import:
import '@shelex/cypress-allure-plugin';
<br>
for IntelliSense (autocompletion) support in your IDE add on top of your cypress/plugins/index.js file:

/// <reference types="@shelex/cypress-allure-plugin" />
