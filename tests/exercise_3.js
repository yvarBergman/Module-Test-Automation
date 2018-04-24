module.exports = {
  '@tags' : ['exercise_3'],
  'Exercise 3' : function(browser) {
    browser.url('https://www.calco.nl')
           .click('.sizing.cta')
           .assert.urlEquals('https://www.werkenbijcalco.nl/')
           .end();
  }
}
