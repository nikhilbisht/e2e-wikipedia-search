# e2e-wikipedia-search

## Technologies Used: 
1.	Programming Language : Javascript
2.	Build Tool : npm
3.	Automation Tool used : cypress.io (cypress is an easy to use and maintain UI automation framework. Refer to :https://docs.cypress.io/guides/overview/why-cypress#Features)
4.	Reporting tool : mochawesome

## Installation
After cloning the project from the repository, make sure you run `npm install` to install all node modules. There should be no further installation required.

## Command to run Test
`npm run test` is the command to run the test

## Project Structure :

1.	fixtures : Fixtures are used as test-data that can be used by test-scripts. I have created 1 fixture file search-text.json, that contains the text to be searched
2.	support :    Support files are in cypress/support.

    - /support/e2e.js.  This file runs before every single spec file. We have imported all the .js file inside the support folder, so we don’t have to import in all the test-scripts.
	- /support/search.js - This file contains all the cypress commands that is required to search the text.
	- /support/result.js - This file contains the code to verify the page after a text is searched

3. e2e : This folder contains all the test-scripts.

## Test Scripts :
  
  I have created 1 test-script e2e/search/search-cy.js.
  
  Scenario :
  
    1. When text is searched with default language
        Steps:
         a. Enter text in search bar
         b. Click on Search Icon
         c. Verify whether user is redirected to valid page
        
    2. When text is searched with language as hindi
        Steps:
         a. Enter text in search bar
         b. Select language as hindi
         c. Click on Search Icon
         
  ## Reports: 
  ![image](https://user-images.githubusercontent.com/17799801/181012964-79a96b92-4a7b-4eab-b055-0bd4e939a2e4.png)
