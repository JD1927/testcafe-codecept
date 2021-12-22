const { I } = inject();

module.exports = {
	goTo() {
		I.amOnPage('http://zero.webappsecurity.com/login.html');
	},

	fillForm() {
		I.waitForElement('#login_form');
		I.fillField('#user_login', 'invalid-username');
		I.fillField('#user_password', 'invalid-password');
		I.click('input[type="submit"]');
	},
};
