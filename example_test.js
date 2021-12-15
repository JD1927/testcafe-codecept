Feature('example');

Scenario('test something', ({ I }) => {
	I.amOnPage('http://www.example.com');
	I.wait(1);
	I.waitForElement('h1');
});
