const assert = require('assert');

describe('form submission tests', () => {
  it('validates the form', () => {
    browser.url('/demo');
    browser.pause(1000);

	$('.demo-form .button').click()
	
	browser.pause(1000);
	
	var errorMsgs = browser.$$('.error')
	assert.equal(errorMsgs[0].$('label').getText(), 'First Name (Please fill in this field.)');
	assert.equal(errorMsgs[1].$('label').getText(), 'Last Name (Please fill in this field.)');
	assert.equal(errorMsgs[2].$('label').getText(), 'Email (Please fill in this field.)');
	assert.equal(errorMsgs[3].$('label').getText(), 'Company Name (Please fill in this field.)');
	assert.equal(errorMsgs[4].$('label').getText(), 'Company Type (Please fill in this field.)');
	assert.equal(errorMsgs[5].$('label').getText(), 'Phone (Please fill in this field.)');
    
  });
  
    it('validates the form redirection', () => {
    browser.url('/demo');
    browser.pause(1000);
	
	
	$('#firstName').addValue('John')
	$('#lastName').addValue('Smith')
	$('#email').addValue('JohnSmith@someemail.com')
	$('#companyName').addValue('ACME Inc')
	$('#companyType').addValue('Time Travel Products')
	$('#phone').addValue('(214)555-1236')


	
	$('.demo-form .button').click()
	
	browser.pause(1000);
	
	assert.equal(browser.getUrl(),'http://localhost:3000/thanks')
	
	browser.pause(1000);
    
  });
  
});
