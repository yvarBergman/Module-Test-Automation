module.exports = {
  '@tags' : ['exercise_2'],
  'assert title' : function(browser) {
    browser.url('https://www.calco.nl')
           .assert.title('Calco - Calco') //change value to 'Calco Masterclass' to let test fail
           .end();
  }
}
