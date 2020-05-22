const assert = require('assert');

describe('navigation tests', () => {
  it('navigate to the homepage', () => {
    browser.url('/');
    browser.pause(1000);
	
	const selector = $('.home');
    var text = selector.$('.title').getText();
    		
    assert.equal(text, 'Home Page');
  });
  
  it('navigate to the About Us page', () => {
    browser.url('/about');
    browser.pause(1000);
    const selector = $('.about');
    var text = selector.$('.title').getText();
    		
    assert.equal(text, 'About Us');
  });
  
  it('navigate to the Request Demo page', () => {
    browser.url('/demo');
    browser.pause(1000);
    const selector = $('.contact');
    var text = selector.$('.title').getText();
    		
    assert.equal(text, 'Contact Us');
  });
  


});




