const assert = require('assert');
const Patterns = require('./Patterns')

const goToUrl = new Patterns.GoToURL()

describe('Sportgo project tests: ', function(){

    beforeEach('Login into the network', function () {
        goToUrl.openURL('https://sportgo.dev.firestitch.com')
    })
})