module.exports = {
  'Test 1' : function(browser) {
    browser.init()
           .url('www.google.nl')
           .pause(3000)
           .assert.urlContains('www.google.nl')
           .end()
  },

  'Test 2' : function(browser) {
    browser.url('www.nos.nl')
           .pause(3000)
           .assert.urlContains('www.nos.nl')
           .end()
  },
}
