const assert = require('assert');
const Patterns = require('./Patterns');

const goToUrl = new Patterns.GoToURL();
const loginPage = new Patterns.LoginPage();

describe('Sportgo project tests: ', function(){

    beforeEach('Login into the network', function () {
        goToUrl.openURL('https://sportgo.dev.firestitch.com');
        loginPage.inputEmail('yaroslav.belinskiy@qa-testlab.com');
        loginPage.inputPassword('78qa22');
        loginPage.clickNextButton();
    });

    it('Create community account', function() {
        
    });
})