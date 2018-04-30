module.exports = {
  '@tags' : ['exercise_4'],
  'button xpath' : function(browser) {
    browser.url('https://www.calco.nl')
           .useXpath()
           .click('/html/body/div[2]/header/div[2]/div[2]/a')
           .assert.urlEquals('https://www.werkenbijcalco.nl/')
           .end();
  }
}
