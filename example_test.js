Feature('example');

Scenario('Test 1', ({ I }) => {
	I.amOnPage('http://www.example.com');
	I.wait(1);
	I.waitForElement('h1');
	I.see('Example');
});

Scenario('Test 2', ({ I }) => {
	I.amOnPage('http://www.example.com');
	I.wait(1);
	I.dontSeeElement('.login-form');
	I.seeInCurrentUrl('example.com');
});

Scenario('Full page screenshot', ({ I }) => {
	I.amOnPage('http://www.example.com');
	I.wait(1);
	I.saveScreenshot('test.png', true);
});
Scenario('Element page screenshot', ({ I }) => {
	I.amOnPage('http://www.example.com');
	I.wait(1);
	I.saveElementScreenshot('h1', 'element.png');
});
