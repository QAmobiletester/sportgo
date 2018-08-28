function randomValue(list) {
    let i = Math.floor(Math.random() * list.length)
    return list[i]
}

class GoToURL {
    openURL(url) {
        browser.url(url)
    }
}
class LoginPage {
    inputEmail(email) {
        browser.setValue('#mat-input-0', email);
    }
    inputPassword(password) {
        browser.setValue('#mat-input-1', password);
    }
    clickNextButton() {
        browser.click('button[type="submit"] span');
    }
}
class MainMenu {
    openMenu() {
        browser.click('img[src$="menu.svg"]');
    }
    openMyAccounts() {
        browser.click('.mat-list .mat-list-item:nth-of-type(2) span');
    }
}
class MyAccountsPage {
    createNewAccount() {
        browser.pause(2009)
        browser.click('.right button span');
    }
}
class CreateAccountPage {
    // chooseAccountType(){
    //     randomValue($$('.bleed a')).click()
    chooseTeamType(accType) {
        const l =  $$('.bleed app-nav-card a')
        l.find (e => e.$('div h3').getText() == accType).click();
    }
}
class FeedPage {
    openCreatePostPage() {
        browser.click('.post-create .post-input-wrapper');
    }
    checkNewCreatedPost() {
        return browser.getText('app-post:first-of-type .content-text');
    }
    getNumberOfLikes() {
        return parseInt(browser.getText('app-post:first-of-type app-likeicon .count'));
    }
    likePost() {
        browser.click('app-post:first-of-type app-likeicon button');
    }
    clickCommentButton() {
        browser.click('app-post:first-of-type app-commenticon button');
    }
    getFirstCommentText() {
        return browser.getText('app-comment-list-item:first-of-type p');
    }
    clickShareButton() {
        browser.click('app-post:first-of-type app-share-menu button');
    }
    clickMyTimeline() {
        browser.click('.mat-menu-content button:nth-of-type(2)');
    }
    getSharedComment() {
        return browser.getText('.sub-content >app-post:nth-child(1) > app-card > app-card-content > p')
    }
}
class CommenstPage {
    writeComment(text) {
        browser.setValue('[name="comment"]', text);
    }
    sendComment() {
        browser.click('.mat-input-wrapper mat-icon');
    }
    getFirstCommentText() {
        return browser.getText('app-comment-list-item:first-of-type p');
    }
}
class CreatePostPage {
    inputPostText(text) {
        browser.setValue('[name="description"]', text);
    }
    clickPostButton() {
        browser.click('.right button');
    }
}
class SharePage {
    inputCommentText(text) {
        browser.setValue('[name="description"]', text);
    }
    clickPostButton() {
        browser.click('.right button');
    }
}
class AccountInfoPage {
    inputName(name) {
        browser.setValue('[name="name"]', name);
    }
    inputBio(bio) {
        browser.setValue('[name="description"]', bio);
    }
    inputGender() {
        browser.click('[name="community_gender"]');
        // browser.click(randomValue($$('[role="option"]:not(:first-child)')));
        randomValue($$('[role="option"]:not(:first-child)')).click();
    }
    inputLocation(location) {
        browser.setValue('[name="address_search"]', location);
    }
    inputSport() {
        browser.click('[name="sport"]');
        const l = $$('[role="option"]:not(:first-child)')
        randomValue(l).click();
    }
    inputAbility() {
        browser.click('[name="ability"]');
        randomValue($$('[role="option"]')).click();
    }
    // inputAgeRange(ageRange) {
    //     browsser.setValue('[name="age_range_id"]', ageRange)
    // }
    clickNextButton() {
        browser.click('.right button ')
    }
}
class CheckElements {
    isVisible(elementLocator) {
        return browser.isVisible(elementLocator);
    }
    elementText(elementLocator) {
        return browser.getText(elementLocator);
    }
}

module.exports = {GoToURL, LoginPage, CheckElements, MainMenu, MyAccountsPage, CreateAccountPage, AccountInfoPage, FeedPage, CreatePostPage, CommenstPage, SharePage};

