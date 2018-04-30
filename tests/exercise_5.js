module.exports = {
  '@tags' : ['exercise_5'],
  'google search' : function(browser) {
    browser.url('https://www.google.nl')
           .setValue('#lst-ib', 'calco')
           .submitForm('#lst-ib')
           .waitForElementVisible('#lst-ib', 1000)
           .assert.value('#lst-ib', 'calco')
           .end();
  }
}
