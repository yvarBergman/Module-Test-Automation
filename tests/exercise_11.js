module.exports = {
  '@tags' : ['exercise_11'],
  'usp block' : function(browser) {
    browser.url('https://www.calco.nl')
           .waitForElementVisible('body > div.pageWrapper > footer.actionRow > section > div.block.benefits', 1000)
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > footer.actionRow > section > div.block.benefits', 'usp block')
           .end();
  }
}
