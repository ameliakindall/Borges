<div class="header">
  <h1 align="center">
    <img src="https://github.com/ameliakindall/Borges/blob/master/borgesalt.jpg" alt="Borges Ribbon Person" align="center" width="300" height="300" />
    <br></br>
  Borges
  </h1>
  <p align="center">
    <img alt="npm" src="https://img.shields.io/npm/v/npm?style=for-the-badge">
    <img alt="npm" src="https://img.shields.io/npm/v/cypress?color=Orange&label=Cypress&style=for-the-badge">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ameliakindall/Borges?color=teal&style=for-the-badge">
  </p>
  <h4 align="center">
    An automated test suite using the
    <a href="https://www.cypress.io"> Cypress </a>
    framework.
  </h4>
</div>

### Background
This is an automated test suite that I created using Javascript and Cypress to test [a demo ecommerce site](http://automationpractice.com/index.php). This is a personal project that I created to demonstrate some of the automated testing work that I've done in my previous roles, and more importantly, so I can continue to experiment and learn more about my favorite automated testing framework! Cypress has a desktop application that enables you to run tests, view results, and debug. Cypress takes snapshots as the test runs so you're able to go back and see what state the application was in at each step.

### Prerequisites
[You need to install NPM](https://www.npmjs.com/get-npm)

### Installation
##### 1. Install Cypress
cd into your home directory and run:
`npm install cypress --save-dev`
This will install the desktop app. In the event of any installation hiccups or if you need more specific information, Cypress has excellent [documentation](https://on.cypress.io/guides/installing-and-running#section-installing).

##### 2.Clone this repo
```
// clone this repo 
git clone git@github.com:ameliakindall/Borges.git

// cd into the cloned repo
cd Borges

// install the project dependencies
npm install
}
```
##### 3. Create a cypress.json file
This is included in the .gitignore because it is where local configurations are supposed to go. It's also where the baseUrl is set, so it's **important** that you add this to get the tests to run:
```
// go to the project
cd Borges

// create the file 
cat > cypress.json

// add the following configuration (viewport configurations are optional)
{
  "baseUrl": "http://automationpractice.com/index.php",
  "viewportWidth": 1920,
  "viewportHeight": 1080
}
```
##### 4. Open the Cypress desktop app
Now that everything is installed, you can open the Cypress desktop app and run the tests. To do so, cd into the project and run the following script: `npm run cypress:open` (this is defined in the package.json file).

### Running the tests
With the desktop app open, it's as simple as clicking on one of the spec files on the list to run all of the tests in that spec. You can also click the `Run All specs` button on the top right hand corner to run all of them at once. 

![](run-spec.gif)

This will open up a window with the command log and test status on the left and a preview of the application on the right. From here you can stop the tests, re-run the test, click on commands, and use the chrome dev tools to debug.

![](test-runner.gif)

Again, I won't go into too much detail here about the test runner itself because Cypress does a great job of that [here](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview).

### Notes on Typescript tooling and IDEs

##### What's up with the name? 
Jorge Luis Borges was an Argentine writer of strange, labyrinthine little metafictions and poems that have absolutely nothing to do with code, automated testing, or my career but I adore them nonetheless. This breaks the rules of meaningful and descriptive names for repositories, but the name makes me happy when I see it, and to me, that's worth risking incoherence.

