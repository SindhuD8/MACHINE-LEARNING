function validateForm() {
    let valid = true;

    // Clear previous errors
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    // Validate first name
    let firstName = document.getElementById('firstName').value;
    if (firstName === '') {
        document.getElementById('firstNameError').innerText = 'First Name is required.';
        valid = false;
    }

    // Validate last name
    let lastName = document.getElementById('lastName').value;
    if (lastName === '') {
        document.getElementById('lastNameError').innerText = 'Last Name is required.';
        valid = false;
    }

    // Validate email
    let email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate password
    let password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters.';
        valid = false;
    }

    // Validate confirm password
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        valid = false;
    }

    return valid;
}
