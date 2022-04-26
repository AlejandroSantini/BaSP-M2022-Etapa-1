window.onload = function() {
    var button = document.getElementById('submit');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');

    var emailValidationRes;
    var passwordValidationRes;

    inputEmail.addEventListener('blur', emailValidator);
    inputPassword.addEventListener('blur', passwordValidator);
    inputEmail.addEventListener('focus', emailFocus);
    inputPassword.addEventListener('focus', passwordFocus);
    button.addEventListener('click', buttonSubmit);

    function emailFocus(e) {
        e.preventDefault();
        inputEmail.classList.remove('email-box-error-i');
        document.getElementsByClassName('error-message')[0].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[0].style.color = '#373867';
    }

    function passwordFocus(e) {
        e.preventDefault();
        inputPassword.classList.remove('password-box-error-i');
        document.getElementsByClassName('error-message')[1].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[1].style.color = '#373867';
    }

    function emailValidator(e) {
        e.preventDefault();
        if (inputEmail.value == 'ale') {
            emailValidationRes = inputEmail.value + '   | Valid email |';
            return true;
        } else {
            emailValidationRes = inputEmail.value + '   | Incomplete or invalid email! |';
            inputEmail.classList.add('email-box-error-i');
            document.getElementsByClassName('error-message')[0].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[0].style.color = '#f10000';
            return false;
        }
    }

    function passwordValidator(e) {
        e.preventDefault();
        if (inputPassword.value == '123') {
            passwordValidationRes = inputPassword.value + '  | Valid pasword |';
            return true;
        } else {
            passwordValidationRes = inputPassword.value + '   | Incomplete or invalid password! |';
            inputPassword.classList.add('password-box-error-i');
            document.getElementsByClassName('error-message')[1].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[1].style.color = '#f10000';
            return false;
        }
    }

    function buttonSubmit(e) {
        e.preventDefault();
        if (emailValidator(e) == true || passwordValidator(e) == true) {
            inputEmail.classList.remove('email-box-error-i');
            document.getElementsByClassName('error-message')[0].style.visibility = 'hidden';
            document.getElementsByClassName('error-color')[0].style.color = '#373867';
            inputPassword.classList.remove('password-box-error-i');
            document.getElementsByClassName('error-message')[1].style.visibility = 'hidden';
            document.getElementsByClassName('error-color')[1].style.color = '#373867';
            alert('Email: ' + emailValidationRes + '\n' + 'Password: ' + passwordValidationRes);
        } else {
            alert('Data required!');
        }
    }      
}