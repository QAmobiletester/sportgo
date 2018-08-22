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

module.exports = {GoToURL, LoginPage};

