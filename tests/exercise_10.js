module.exports = {
  '@tags' : ['exercise_10'],
  'Exercise 10' : function(browser) {
    browser.url('https://www.calco.nl')
           .waitForElementVisible('#topLogo', 1000)
           .assert.screenshotIdenticalToBaseline('#topLogo', 'logo')
           .end();
  }
}
