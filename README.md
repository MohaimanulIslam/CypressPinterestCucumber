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
Please make use of cosmiconfig to create a configuration for the plugin, for example, by adding this section to your package.json:

"cypress-cucumber-preprocessor": {<br>
  "nonGlobalStepDefinitions": true
<br>}

