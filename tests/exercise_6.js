module.exports = {
  '@tags' : ['exercise_6'],
  'Exercise 6' : function(browser) {
    browser.url('https://www.calco.nl')
           .click('#form > div:nth-child(13) > input[type="email"]')
           .setValue('#form > div:nth-child(13) > input[type="email"]', 'calco')
           .click('#form > div.bottom > button')
           .waitForElementPresent('#parsley-id-4847 > li', 1000) //unique id, gaat niet werken
           .assert.containsText('#parsley-id-4847 > li','Dit lijkt geen geldig e-mail adres te zijn')
           .end();
  }
}
