const assert = require('assert');
const Patterns = require('./Patterns');

const goToUrl = new Patterns.GoToURL();
const loginPage = new Patterns.LoginPage();
const checkElements = new Patterns.CheckElements();
const mainMenu = new Patterns.MainMenu();
const myAccountsPage = new Patterns.MyAccountsPage();
const createAccountPage = new Patterns.CreateAccountPage();
const accountInfoPage = new Patterns.accountInfoPagePage();

describe('Sportgo project tests: ', function(){

    beforeEach('Login into the network', function () {
        goToUrl.openURL('https://sportgo.dev.firestitch.com');
        loginPage.inputEmail('yaroslav.belinskiy@qa-testlab.com');
        loginPage.inputPassword('78qa22');
        loginPage.clickNextButton();
    });

    it('Check if user is successfully logged in', function() {
        let mind = checkElements.isVisible('.post-create .post-input-wrapper');
        assert.equal(mind, true);
    });

    it('Create community account', function() {
        mainMenu.openMenu();
        mainMenu.openMyAccounts();
        myAccountsPage.createNewAccount();
        createAccountPage.chooseHockeyTeam();
        let communityName = 'Test name';
        accountInfoPage.inputName('communityName');
        accountInfoPage.inputBio('test bio');
        accountInfoPage.inputGender();
        accountInfoPage.inputLocation('New York');
        accountInfoPage.inputSport();
        accountInfoPage.inputAbility();
        accountInfoPage.clickNextButton();
        assert.equal(checkElements.elementText('app-account-name'), communityName);
    });
})