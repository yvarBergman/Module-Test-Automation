module.exports = {
  '@tags' : ['exercise_3'],
  'button' : function(browser) {
    browser.url('https://www.calco.nl')
           .click('.sizing.cta')
           .assert.urlEquals('https://www.werkenbijcalco.nl/')
           .end();
  }
}
