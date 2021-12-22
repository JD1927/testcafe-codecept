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
	I.amOnPage('http://www.example.com/');
	let text = await I.grabTextFrom('h1');
	console.log(`Text: ${text}`);
	let value = await I.grabValueFrom('h1');
	console.log(`Value: ${value}`);
});
