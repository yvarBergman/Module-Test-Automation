module.exports = {
  '@tags' : ['exercise_9'],
  'intranet' : function(browser) {
    browser.url('https://intranet.calco.nl/index.php/login')
           .click('#username')
           .setValue('#username', '') //use your own loginname here
           .click('#password')
           .setValue('#password', '') //use your own password here
           .click('body > div.uk-container.uk-container-center > div > div > main > div.login > form > fieldset > div:nth-child(4) > div > button')
           .waitForElementVisible('body > div.uk-sticky-placeholder > div > div > nav > ul > li:nth-child(1) > a', 1000)
           .assert.urlEquals('https://intranet.calco.nl/index.php/login/profile')
           .assert.elementPresent('body > div.uk-sticky-placeholder > div > div > nav > ul > li:nth-child(1) > a')
           .assert.elementPresent('body > div.uk-sticky-placeholder > div > div > nav > ul > li:nth-child(2) > a')
           .assert.elementPresent('body > div.uk-sticky-placeholder > div > div > nav > ul > li:nth-child(3) > a')
           .assert.elementPresent('body > div.uk-sticky-placeholder > div > div > nav > div.uk-navbar-flip > ul > li:nth-child(1)')
           .assert.elementPresent('body > div.uk-sticky-placeholder > div > div > nav > div.uk-navbar-flip > ul > li:nth-child(2)')
           .assert.elementPresent('body > div.uk-sticky-placeholder > div > div > nav > div.uk-navbar-flip > ul > li:nth-child(3)')
           .assert.elementPresent('body > div.uk-sticky-placeholder > div > div > nav > div.uk-navbar-flip > ul > li:nth-child(4)')
           .end();
  }
}
