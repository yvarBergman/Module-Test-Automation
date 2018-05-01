module.exports = {
  '@tags' : ['exercise_14'],
  'logo' : function(browser) {
    browser.url('https://www.calco.nl')
           .waitForElementVisible('body > div.pageWrapper > footer.actionRow > section > div.block.form', 1000)
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > footer.actionRow > section > div.block.form', 'afspraak formulier - default')
           .click('#form > div.bottom > button')
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > footer.actionRow > section > div.block.form', 'afspraak formulier - errors')
           .end();
  }
}
