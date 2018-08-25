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
        browser.click('.right button span');
    }
}
class CreateAccountPage {
    // chooseAccountType(){
    //     randomValue($$('.bleed a')).click()
    chooseHockeyTeam() {
        browser.click('.bleed app-nav-card:nth-of-type(1) a');
    }
}
class FeedPage {
    openCreatePostPage() {
        browser.click('.post-create .post-input-wrapper');
    }
    checkNewCreatedPost() {
        return browser.getText('app-post:first-of-type .content-text');
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
class AccountInfoPage {
    inputName(name) {
        browsser.setValue('[name="name"]', name);
    }
    inputBio(bio) {
        browsser.setValue('[name="description"]', bio);
    }
    inputGender() {
        browser.click('[name="community_gender"]');
        browser.click(randomValue($$('[role="option"]:not(:first-child)')));
    }
    inputLocation(location) {
        browsser.setValue('[name="address_search"]', location);
    }
    inputSport() {
        browser.click('[name="sport"]');
        browser.click(randomValue($$('[role="option"]:not(:first-child)')));
    }
    inputAbility() {
        browser.click('[name="ability"]');
        browser.click(randomValue($$('[role="option"]')));
    }
    // inputAgeRange(ageRange) {
    //     browsser.setValue('[name="age_range_id"]', ageRange)
    // }
    clickNextButton() {
        browser.click('.right button ')
    }
}
class CheckElements {
    isVisible(element) {
        return browser.isVisible(element);
    }
    elementText(element) {
        return browser.getText(element);
    }
}
module.exports = {GoToURL, LoginPage, CheckElements, MainMenu, MyAccountsPage, CreateAccountPage, AccountInfoPage, FeedPage, CreatePostPage};

