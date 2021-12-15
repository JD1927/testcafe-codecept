Feature('example');

Scenario('test something', ({ I }) => {
	I.amOnPage('http://www.example.com');
	I.wait(1);
	I.waitForElement('h1');
	I.see('Example');
	I.dontSeeElement('.login-form');
	I.seeInCurrentUrl('example.com');
});
