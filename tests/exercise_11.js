module.exports = {
  '@tags' : ['exercise_11'],
  'Social media icons' : function(browser) {
    browser.url('https://www.calco.nl')
           .waitForElementVisible('#topLogo', 1000)
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header > div.topBar > div > div.right > ul > li.social > a:nth-child(2) > span', 'twitter')
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header > div.topBar > div > div.right > ul > li.social > a:nth-child(3) > span', 'linkedin')
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header > div.topBar > div > div.right > ul > li.social > a:nth-child(4) > span', 'facebook')
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header > div.topBar > div > div.right > ul > li.social > a:nth-child(5) > span', 'instagram')
           .assert.screenshotIdenticalToBaseline('body > div.pageWrapper > header > div.topBar > div > div.right > ul > li.social > a:nth-child(3) > span', 'xing')
           .end();
  }
}
