Feature('example');

// Scenario('Login Test', ({ I }) => {
// 	I.amOnPage('http://zero.webappsecurity.com/login.html');
// 	I.waitForElement('#login_form');
// 	I.fillField('#user_login', 'invalid-username');
// 	I.fillField('#user_password', 'invalid-password');
// 	I.click('input[type="submit"]');
// 	I.waitForText('Login and/or password are wrong.');
// });

Scenario('Extract Test', async ({ I }) => {
	I.slowTest(0.2);
	I.amOnPage('http://www.example.com/');
	I.refreshPage(); // Reload browser
	let text = await I.grabTextFrom('h1');
	console.log(`Text: ${text}`);
	let value = await I.grabValueFrom('h1');
	console.log(`Value: ${value}`);
});

Scenario('Page Object', async ({ I, LoginPage }) => {
	LoginPage.goTo();
	LoginPage.fillForm();
	I.waitForText('Login and/or password are wrong.');
});
