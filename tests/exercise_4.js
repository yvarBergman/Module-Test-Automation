module.exports = {
  '@tags' : ['exercise_4'],
  'search' : function(browser) {
    browser.url('https://www.calco.nl')
           .click('body > div.pageWrapper > header > div.bottomBar.container > nav > ul > li.level-1.search > a > span')
           .setValue('.js-searchInputModal','traineeship')
           .click('#search > button')
           .assert.urlEquals('https://www.calco.nl/zoeken?q=traineeship') 
           .assert.containsText('body > div.pageWrapper > section.hero.sub > div > div > div > div > div', '12 resultaten voor traineeship')
           .end();
  }
}
