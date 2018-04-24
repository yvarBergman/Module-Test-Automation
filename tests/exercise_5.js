module.exports = {
  '@tags' : ['exercise_5'],
  'slider' : function(browser) {
    browser.url('https://www.calco.nl')
           .moveToElement('.caseSlider', 0, 0)
           .click('#casePhotos > ol > li:nth-child(2) > a')
           .click('#casePhotos > ul > li.flex-active-slide > a')
           .assert.urlEquals('https://www.calco.nl/weblog/achmea-pensioenen')
           .assert.containsText('body > div.pageWrapper > section.hero.sub > div > div > div.alignVert > div > h1', 'Achmea en pensioenen')
           .end();
  }
}
