const assert = require('assert');

describe('screenshot comparison tests', () => {
  it('matches the home page screenshot to current page', () => {
    browser.url('/');
    browser.pause(3000);
    assert.equal(false, true);
  });
});
