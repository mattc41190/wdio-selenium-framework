const assert = require('assert');
const beePage = require('../../pages/bees.page.js');

describe("A Very Useful Application Page", function() {

  beforeEach(function() {
    browser.url('/');
  })

  it("Does a very useful thing", function() {
    let expectedTitle = "beesbeesbees.com"
    let title =  browser.getTitle();
    assert(title === expectedTitle)
  })
})
