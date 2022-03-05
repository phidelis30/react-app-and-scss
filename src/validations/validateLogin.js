export default function validateLogin({ login, password }) {
	if (!login.trim()) {
		return 'Email or phone number required';
	}
	if (!password) {
		return 'Password is required';
	} else if (password.length < 6) {
		return 'Password needs to be 6 characters or more';
	}
	return null;
}
