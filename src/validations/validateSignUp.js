export const validateSignUp_1 = ({ firstName,lastName, dateBirth }) => {
	if (!firstName.trim()) {
		return 'First name is required';
	}
	if (!lastName.trim()) {
		return 'Last name is required';
	}
	if (!dateBirth.trim()) {
		return 'Date birthday is required';
	}
	
	return null;
}

export const validateSignUp_2 = ({ sexe, adress, country }) => {
	
	if (!sexe.trim()) {
		return 'Sexe is required';
	}
	if (!adress.trim()) {
		return 'Adress is required';
	}
	if (!country.trim()) {
		return 'Country is required';
	}
	return null;
}
export const validateSignUp_3_email = ({ email}) => {
	
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email is required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	return null;
}
export const validateSignUp_3_phoneNumber = ({ phoneNumber}) => {
	

	if (!phoneNumber) {
		return 'Phone number is required';
	} else if (phoneNumber.length < 10) {
		return 'Phone number needs to be 10 numbers or more';
	}
	return null;
}
export const validateSignUp_3_code = ({ code }) => {
	
	if (!code) {
		return 'Code is required';
	} else if (code.length < 6 || code.length > 6) {
		return 'Code needs to be 6 numbers exact';
	}
	return null;
}
export const validateSignUp_4 = ({ password, confirmPass}) => {
	
	if (!password) {
		return 'Password is required';
	} else if (password.length < 6) {
		return 'Password needs to be 6 characters or more';
	}

	if (!confirmPass) {
		return 'Enter Confirm password is required';
	} else if (confirmPass !== password) {
		return 'Passwords do not match';
	}
	return null;
}
