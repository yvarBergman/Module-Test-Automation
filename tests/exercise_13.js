module.exports = {
  '@tags' : ['exercise_13'],
  'resize' : function(browser) {
    browser.url('https://www.calco.nl')
           .waitForElementVisible('body > div.pageWrapper > header', 1000)
           .resizeWindow(1300, 600)
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header', 'header - desktop')
           .resizeWindow(768, 1024)
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header', 'header - tablet')
           .resizeWindow(320, 480)
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header', 'header - mobile')
           .end();
  }
}
