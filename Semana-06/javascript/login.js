window.onload = function() {
    //Get inputs
    
    var button = document.getElementById('submit');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');

    var emailValidationRes;
    var passwordValidationRes;

    //Add focus and blur events

    inputEmail.addEventListener('blur', emailValidator);
    inputPassword.addEventListener('blur', passwordValidator);
    inputEmail.addEventListener('focus', emailFocus);
    inputPassword.addEventListener('focus', passwordFocus);
    button.addEventListener('click', buttonSubmit);

    //Functions to make focus

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

    //Functions for internal validations

    var letters = 'abcdefghyjklmnñopqrstuvwxyz';
    function hasLetter(string) {
        string = string.toLowerCase();
        for (i=0; i<string.length; i++) {
           if (letters.indexOf(string.charAt(i),0)!=-1) {
              return true;
            }
        }
        return false;
    }
    
    var numbers = '0123456789';
    function hasNumber(string) {
        string = string.toLowerCase();
        for (i=0; i<string.length; i++) {
           if (numbers.indexOf(string.charAt(i),0)!=-1) {
              return true;
            }
        }
        return false;
    }

    //Functions to validate inputs and make blur

    function emailValidator(e) {
        e.preventDefault();
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(inputEmail.value) == true) {
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
        if (inputPassword.value.length >= 8 && hasNumber(inputPassword.value) == true && hasLetter(inputPassword.value)) {
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