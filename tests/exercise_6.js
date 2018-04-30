module.exports = {
  '@tags' : ['exercise_6'],
  'google search clear value' : function(browser) {
    browser.url('https://www.google.nl')
           .setValue('#lst-ib', 'calco')
           .submitForm('#lst-ib')
           .waitForElementVisible('#lst-ib', 1000)
           .clearValue('#lst-ib')
           .assert.value('#lst-ib', '')
           .end();
  }
}
