window.onload = function() {
    var button = document.getElementById('submit');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');

    var emailValidationRes;
    var passwordValidationRes;

    inputEmail.addEventListener('blur', emailValidator);
    inputPassword.addEventListener('blur', passwordValidator);
    button.addEventListener('click', buttonSubmit);

    function emailValidator(e) {
        e.preventDefault();
        if (inputEmail.value == 'ale') {
            emailValidationRes = inputEmail.value + '   | Valid email |';
            console.log('1');
        } else {
            emailValidationRes = inputEmail.value + '   | Incomplete or invalid email! |';
            console.log('2');
        }
    }

    function passwordValidator(e) {
        e.preventDefault();
        if (inputPassword.value == '123') {
            passwordValidationRes = inputPassword.value + '  | Valid pasword |';
        } else {
            passwordValidationRes = inputPassword.value + '   | Incomplete or invalid password! |';
        }
    }

    function buttonSubmit(e) {
        e.preventDefault();
        alert('Email: ' + emailValidationRes + '\n' + 'Password: ' + passwordValidationRes);
    }
}