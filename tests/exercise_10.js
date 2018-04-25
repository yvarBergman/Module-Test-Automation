module.exports = {
  '@tags' : ['exercise_10'],
  'logo' : function(browser) {
    browser.url('https://www.calco.nl')
           .waitForElementVisible('#topLogo', 1000)
           .assert.screenshotIdenticalToBaseline('#topLogo', 'logo')
           .end();
  }
}
