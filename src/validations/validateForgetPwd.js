export default function validateForgetPwd({ login }) {
	if (!login.trim()) {
		return 'Email or phone number required';
	}
	return null;
}
