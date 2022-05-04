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
        if (inputEmail.value != '') {
            document.getElementsByClassName('error-message')[0].textContent="Email required!";
        }
    }

    function passwordFocus(e) {
        e.preventDefault();
        inputPassword.classList.remove('password-box-error-i');
        document.getElementsByClassName('error-message')[1].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[1].style.color = '#373867';
        if (inputPassword.value != '') {
            document.getElementsByClassName('error-message')[1].textContent="Password required!";
        }
    }

    //Functions for internal validations

    var letters = 'abcdefghyjklmnñopqrstuvwxyz';
    function hasLetter(string) {
        var stringL = string.toLowerCase();
        for (i=0; i<stringL.length; i++) {
           if (letters.includes(stringL[i])) {
              return true;
            }
        }
        return false;
    }
    
    var numbers = '0123456789';
    function hasNumber(string) {
        var stringL = string.toLowerCase();
        for (i=0; i<stringL.length; i++) {
           if (numbers.includes(stringL[i])) {
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
            if (inputEmail.value != '') {
                document.getElementsByClassName('error-message')[0].textContent="It must be in a valid email format!";
            }
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
            if (inputPassword.value != '') {
                document.getElementsByClassName('error-message')[1].textContent="It must be made up of letters and numbers!";
            }
            return false;
        }
    }

    function validationResult(e) {
        if (emailValidator(e) == true && passwordValidator(e) == true) {
        return true;
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
        } if (validationResult(e)) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + 
            inputEmail.value + '&password=' + inputPassword.value)
                .then(function (response) {
                    return response.json();
                })
                .then(function (jsonResponse) {
                    jsonResponseMsg = jsonResponse.msg;
                    console.log("json", jsonResponse);
                    if (jsonResponse.success) {
                        console.log("Good", jsonResponse);
                        alert('The request was made correctly.' + '\n' + 'Response: ' + jsonResponseMsg);
                    } else {
                        throw jsonResponse;
                    }
                })
                .catch(function (error) {
                    console.warn('Error', error); 
                    alert('The request was made incorrectly.' + '\n' + 'Response: ' + jsonResponseMsg);
                })
        } 
    }   
}