module.exports = {
    'index' : function (browser) {
        browser

        .url('http://localhost:8000/')
        .waitForElementVisible('#app', 1000)
        .click('#about-link')
        .waitForElementVisible('#about', 1000)
        .click('#about-close')
        .assert.elementNotPresent("#about")
        .end();
    }
};
