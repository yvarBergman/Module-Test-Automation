module.exports = {
  '@tags' : ['exercise_12'],
  'hover contact' : function(browser) {
    browser.url('https://www.calco.nl')
           .waitForElementVisible('body > div.pageWrapper > header > div.bottomBar.container > nav > ul > li:nth-child(4) > a', 1000)
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header > div.bottomBar.container > nav > ul > li:nth-child(4) > a', 'contact default')
           .moveTo('body > div.pageWrapper > header > div.bottomBar.container > nav > ul > li:nth-child(4) > a')
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header > div.bottomBar.container > nav > ul > li:nth-child(4) > a', 'contact hover')
           .end();
  }
}
