const assert = require('assert');
const Patterns = require('./Patterns');

const goToUrl = new Patterns.GoToURL();
const loginPage = new Patterns.LoginPage();
const checkElements = new Patterns.CheckElements();
const mainMenu = new Patterns.MainMenu();
const myAccountsPage = new Patterns.MyAccountsPage();
const createAccountPage = new Patterns.CreateAccountPage();
const accountInfoPage = new Patterns.AccountInfoPage();
const feedPage = new Patterns.FeedPage();
const createPostPage = new Patterns.CreatePostPage();
const commenstPage = new Patterns.CommenstPage();
const sharePage = new Patterns.SharePage();

describe('Sportgo project tests: ', function() {

    beforeEach('Login into the network', function () {
        goToUrl.openURL('/');
        loginPage.inputEmail('yaroslav.belinskiy@qa-testlab.com');
        loginPage.inputPassword('78qa22');
        loginPage.clickNextButton();
        browser.waitForVisible('img[src$="menu.svg"]')
    });

    it('Check if user is successfully logged in ', function() {
        let mind = checkElements.isVisible('.post-create .post-input-wrapper');
        assert.equal(mind, true);
    });

    fit('Create community account ', function() {
        mainMenu.openMenu();
        mainMenu.openMyAccounts();
        myAccountsPage.createNewAccount();
        createAccountPage.chooseTeamType('Hockey Team');
        const communityName = `testacc_${Math.floor(Math.random() * 1000)}`;
        accountInfoPage.inputName(communityName);
        accountInfoPage.inputBio('test bio');
        accountInfoPage.inputGender();
        accountInfoPage.inputLocation('New York');
        accountInfoPage.inputSport();
        accountInfoPage.inputAbility();
        accountInfoPage.clickNextButton();
        assert.equal(checkElements.elementText('app-account-name'), communityName);
        // expect(checkElements.elementText('app-account-name')).toEqual(communityName)
    });

    it('Create a new text post ', function() {
        feedPage.openCreatePostPage();
        let postText = 'Test text for post';
        createPostPage.inputPostText(postText);
        createPostPage.clickPostButton();
        assert.equal(feedPage.checkNewCreatedPost(), postText);
    });

    it('Like a first post ', function() {
        let initialNumberOfLikes = feedPage.getNumberOfLikes();
        feedPage.likePost();
        let newNumberOfLikes = feedPage.getNumberOfLikes();
        assert.equal((initialNumberOfLikes + 1), newNumberOfLikes);
    });

    it('Comment a first post ', function() {
        feedPage.clickCommentButton();
        let commentText = 'text for comment';
        commenstPage.writeComment(commentText);
        commenstPage.sendComment();
        let checkComment = commenstPage.getFirstCommentText();
        asser.equal(commentText, checkComment);
        goToUrl.openURL('https://sportgo.dev.firestitch.com/feed');
        let feedComment = feedPage.getFirstCommentText();
        asser.equal(commentText, feedComment);
    });

    it('Share post on my timeline ', function() {
        feedPage.openCreatePostPage();
        let postText = 'Test text for post';
        createPostPage.inputPostText(postText);
        createPostPage.clickPostButton();
        feedPage.clickShareButton();
        feedPage.clickMyTimeline();
        let commentText = 'Text for sharing comment';
        sharePage.inputCommentText(commentText);
        sharePage.clickPostButton();
        let checkCommentText = feedPage.getSharedComment();
        assert.equal(commentText, checkCommentText);
    });

    it('Create event ', function() {
        
    })
})