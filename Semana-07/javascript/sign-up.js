window.onload = function() {

    //Get inputs

    var button = document.getElementById('submit');
    var inputName = document.getElementById('name');
    var inputSurname = document.getElementById('surname');
    var inputDni = document.getElementById('dni');
    var inputBirthDate = document.getElementById('birth-date');
    var inputPhone = document.getElementById('phone');
    var inputAddress = document.getElementById('address');
    var inputLocation = document.getElementById('location');
    var inputPostalCode = document.getElementById('postal-code');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var inputPassword2 = document.getElementById('password2');

    var nameValidationRes;
    var surnameValidationRes;
    var dniValidationRes;
    var birthDateValidationRes;
    var phoneValidationRes;
    var addressValidationRes;
    var locationValidationRes;
    var postalCodeValidationRes;
    var emailValidationRes;
    var passwordValidationRes;
    var password2ValidationRes;

    //Add focus and blur events

    inputName.addEventListener('blur', nameValidator);
    inputSurname.addEventListener('blur', surnameValidator);
    inputDni.addEventListener('blur', dniValidator);
    inputBirthDate.addEventListener('blur', birthDateValidator);
    inputPhone.addEventListener('blur', phoneValidator);
    inputAddress.addEventListener('blur', addressValidator);
    inputLocation.addEventListener('blur', locationValidator);
    inputPostalCode.addEventListener('blur', postalCodeValidator);
    inputEmail.addEventListener('blur', emailValidator);
    inputPassword.addEventListener('blur', passwordValidator);
    inputPassword2.addEventListener('blur', password2Validator);
    inputName.addEventListener('focus', nameFocus);
    inputSurname.addEventListener('focus', surnameFocus);
    inputDni.addEventListener('focus', dniFocus);
    inputBirthDate.addEventListener('focus', birthDateFocus);
    inputPhone.addEventListener('focus', phoneFocus);
    inputAddress.addEventListener('focus', addressFocus);
    inputLocation.addEventListener('focus', locationFocus);
    inputPostalCode.addEventListener('focus', postalCodeFocus);
    inputEmail.addEventListener('focus', emailFocus);
    inputPassword.addEventListener('focus', passwordFocus);
    inputPassword2.addEventListener('focus', password2Focus);
    button.addEventListener('click', buttonSubmit);

    //Functions to make focus

    function nameFocus(e) {
        e.preventDefault();
        inputName.classList.remove('name-box-error-i');
        document.getElementsByClassName('error-message')[0].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[0].style.color = '#373867';
    }

    function surnameFocus(e) {
        e.preventDefault();
        inputSurname.classList.remove('surname-box-error-i');
        document.getElementsByClassName('error-message')[1].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[1].style.color = '#373867';
    }

    function dniFocus(e) {
        e.preventDefault();
        inputDni.classList.remove('dni-box-error-i');
        document.getElementsByClassName('error-message')[2].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[2].style.color = '#373867';
    }

    function birthDateFocus(e) {
        e.preventDefault();
        inputBirthDate.classList.remove('birth-date-box-error-i');
        document.getElementsByClassName('error-message')[3].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[3].style.color = '#373867';
    }

    function phoneFocus(e) {
        e.preventDefault();
        inputPhone.classList.remove('phone-box-error-i');
        document.getElementsByClassName('error-message')[4].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[4].style.color = '#373867';
    }

    function addressFocus(e) {
        e.preventDefault();
        inputAddress.classList.remove('address-box-error-i');
        document.getElementsByClassName('error-message')[5].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[5].style.color = '#373867';
    }

    function locationFocus(e) {
        e.preventDefault();
        inputLocation.classList.remove('location-box-error-i');
        document.getElementsByClassName('error-message')[6].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[6].style.color = '#373867';
    }

    function postalCodeFocus(e) {
        e.preventDefault();
        inputPostalCode.classList.remove('postal-code-box-error-i');
        document.getElementsByClassName('error-message')[7].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[7].style.color = '#373867';
    }

    function emailFocus(e) {
        e.preventDefault();
        inputEmail.classList.remove('email-box-error-i');
        document.getElementsByClassName('error-message')[8].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[8].style.color = '#373867';
    }

    function passwordFocus(e) {
        e.preventDefault();
        inputPassword.classList.remove('password-box-error-i');
        document.getElementsByClassName('error-message')[9].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[9].style.color = '#373867';
    }

    function password2Focus(e) {
        e.preventDefault();
        inputPassword2.classList.remove('password2-box-error-i');
        document.getElementsByClassName('error-message')[10].style.visibility = 'hidden';
        document.getElementsByClassName('error-color')[10].style.color = '#373867';
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

    function hasMoreThreeLetters(string) {
        string = string.toLowerCase();
        var amount = 0;
        for (i=0; i<string.length; i++) {
           if (letters.includes(string[i])) {
                amount++;
            }
        }
        return (amount > 3);
    }

    function hasFiveLetters(string) {
        string = string.toLowerCase();
        var amount = 0;
        for (i=0; i<string.length; i++) {
           if (letters.includes(string[i])) {
                amount++;
            }
        }
        return (amount >= 5);
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

    var space = ' ';
    function hasSpace(string) {
        string = string.toLowerCase();
        for (i=0; i<string.length; i++) {
           if (space.includes(string[i])) {
              return true;
            }
        }
        return false;
    }

    function onlyLetters(string) {
        var stringValidator = true;
        for (var i=0; i<string.length; i++) {
            stringArray = string;
            stringValidator = stringValidator && (stringArray[i].toLowerCase() !== stringArray[i].toUpperCase());
        }
        return stringValidator;
    }
    
    function toDateFormat(string) {
        var dateArray = string.split('/');
        var dateFormat = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
        return dateFormat;
    }

    function toApiFormat(string) {
        var dateArray = string.split('-');
        var apiFormat = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
        return apiFormat;
    }

    //Functions to validate inputs and make blur

    function nameValidator(e) {
        e.preventDefault();
        if (inputName.value.length > 3 && onlyLetters(inputName.value) == true) {
            nameValidationRes = inputName.value + '   | Valid name |';
            return true;
        } else {
            nameValidationRes = inputName.value + '   | Incomplete or invalid name! |';
            inputName.classList.add('name-box-error-i');
            document.getElementsByClassName('error-message')[0].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[0].style.color = '#f10000';
            return false;
        }
    }

    function surnameValidator(e) {
        e.preventDefault();
        if (inputSurname.value.length > 3 && onlyLetters(inputSurname.value) == true) {
            surnameValidationRes = inputSurname.value + '   | Valid surname |';
            return true;
        } else {
            surnameValidationRes = inputSurname.value + '   | Incomplete or invalid surname! |';
            inputSurname.classList.add('surname-box-error-i');
            document.getElementsByClassName('error-message')[1].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[1].style.color = '#f10000';
            return false;
        }
    }
 
    function dniValidator(e) {
        e.preventDefault();
        if (inputDni.value.length >= 7 && Number(inputDni.value) == inputDni.value) {
            dniValidationRes = inputDni.value + '   | Valid dni |';
            return true;
        } else {
            dniValidationRes = inputDni.value + '   | Incomplete or invalid dni! |';
            inputDni.classList.add('dni-box-error-i');
            document.getElementsByClassName('error-message')[2].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[2].style.color = '#f10000';
            return false;
        }
    }

    function birthDateValidator(e) {
        e.preventDefault();
        if ((new Date(inputBirthDate.value)) <= new Date()) {
            birthDateValidationRes = inputBirthDate.value + '   | Valid birth date |';
            console.log('hello');
            return true;
        } else {
            birthDateValidationRes = inputBirthDate.value + '   | Incomplete or invalid birth date! |';
            inputBirthDate.classList.add('birth-date-box-error-i');
            document.getElementsByClassName('error-message')[3].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[3].style.color = '#f10000';
            return false;
        }
    }

    function phoneValidator(e) {
        e.preventDefault();
        if (inputPhone.value.length == 10 && Number(inputPhone.value) == inputPhone.value) {
            phoneValidationRes = inputPhone.value + '   | Valid phone |';
            return true;
        } else {
            phoneValidationRes = inputPhone.value + '   | Incomplete or invalid phone! |';
            inputPhone.classList.add('phone-box-error-i');
            document.getElementsByClassName('error-message')[4].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[4].style.color = '#f10000';
            return false;
        }
    }

    function addressValidator(e) {
        e.preventDefault();
        if (hasFiveLetters(inputAddress.value) == true &&  hasNumber(inputAddress.value) == true && hasSpace(inputAddress.value) == true) {
            addressValidationRes = inputAddress.value + '   | Valid address |';
            return true;
        } else {
            addressValidationRes = inputAddress.value + '   | Incomplete or invalid address! |';
            inputAddress.classList.add('address-box-error-i');
            document.getElementsByClassName('error-message')[5].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[5].style.color = '#f10000';
            return false;
        }
    }

    function locationValidator(e) {
        e.preventDefault();
        if (hasNumber(inputLocation.value) == true && hasMoreThreeLetters(inputLocation.value) == true) {
            locationValidationRes = inputLocation.value + '   | Valid location |';
            return true;
        } else {
            locationValidationRes = inputLocation.value + '   | Incomplete or invalid location! |';
            inputLocation.classList.add('location-box-error-i');
            document.getElementsByClassName('error-message')[6].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[6].style.color = '#f10000';
            return false;
        }
    }

    function postalCodeValidator(e) {
        e.preventDefault();
        if ((inputPostalCode.value.length == 4 || inputPostalCode.value.length == 5) && Number(inputPostalCode.value) == inputPostalCode.value) {
            postalCodeValidationRes = inputPostalCode.value + '   | Valid postal code |';
            return true;
        } else {
            postalCodeValidationRes = inputPostalCode.value + '   | Incomplete or invalid postal code! |';
            inputPostalCode.classList.add('postal-code-box-error-i');
            document.getElementsByClassName('error-message')[7].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[7].style.color = '#f10000';
            return false;
        }
    }

    function emailValidator(e) {
        e.preventDefault();
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(inputEmail.value) == true) {
            emailValidationRes = inputEmail.value + '   | Valid email |';
            return true;
        } else {
            emailValidationRes = inputEmail.value + '   | Incomplete or invalid email! |';
            inputEmail.classList.add('email-box-error-i');
            document.getElementsByClassName('error-message')[8].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[8].style.color = '#f10000';
            return false;
        }
    }

    function passwordValidator(e) {
        e.preventDefault();
        if (inputPassword.value.length >= 8 && hasNumber(inputPassword.value) == true && hasLetter(inputPassword.value) == true) {
            passwordValidationRes = inputPassword.value + '  | Valid pasword |';
            return true;
        } else {
            passwordValidationRes = inputPassword.value + '   | Incomplete or invalid password! |';
            inputPassword.classList.add('password-box-error-i');
            document.getElementsByClassName('error-message')[9].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[9].style.color = '#f10000';
            return false;
        }
    }

    function password2Validator(e) {
        e.preventDefault();
        if (inputPassword2.value == inputPassword.value) {
            password2ValidationRes = inputPassword2.value + '  | Valid pasword |';
            return true;
        } else {
            password2ValidationRes = inputPassword2.value + '   | Incomplete or invalid password! |';
            inputPassword2.classList.add('password2-box-error-i');
            document.getElementsByClassName('error-message')[10].style.visibility = 'visible';
            document.getElementsByClassName('error-color')[10].style.color = '#f10000';
            return false;
        }
    }

    function validationResult(e) {
        if (birthDateValidator(e) == true && phoneValidator(e) == true && 
        addressValidator(e) == true && locationValidator(e) == true && 
        postalCodeValidator(e) == true && emailValidator(e) == true && 
        passwordValidator(e) == true && password2Validator(e) == true)
        return true;
    }

    // Autocomplete code
    //AGREGAR VALIDACION SI LOS INPUT ESTAN VACIOS
    var nameX = localStorage.getItem('name');
    var surnameX = localStorage.getItem('surname');
    var dniX = localStorage.getItem('dni');
    var birthDateX = localStorage.getItem('birthDate');
    var phoneX = localStorage.getItem('phone');
    var addressX = localStorage.getItem('address');
    var locationX = localStorage.getItem('location');
    var postalCodeX = localStorage.getItem('postalCode');
    var emailX = localStorage.getItem('email');
    var passwordX = localStorage.getItem('password');
    birthDateX = toDateFormat(birthDateX);
    inputName.value = nameX;
    inputSurname.value = surnameX;
    inputDni.value = dniX;
    inputBirthDate.value = birthDateX;
    inputPhone.value = phoneX;
    inputAddress.value = addressX;
    inputLocation.value = locationX;
    inputPostalCode.value = postalCodeX;
    inputEmail.value = emailX;
    inputPassword.value = passwordX;
    inputPassword2.value = passwordX;

    // Function for button submit

    function buttonSubmit(e) {
        e.preventDefault();
        alert('Name: ' + nameValidationRes + '\n'
            + 'Surname: ' + surnameValidationRes + '\n'
            + 'DNI: ' + dniValidationRes + '\n'
            + 'Birth date: ' + birthDateValidationRes + '\n'
            + 'Phone: ' + phoneValidationRes + '\n'
            + 'Address: ' + addressValidationRes + '\n'
            + 'Location: ' + locationValidationRes + '\n'
            + 'Postal code: ' + postalCodeValidationRes + '\n'
            + 'Email: ' + emailValidationRes + '\n' 
            + 'Password: ' + passwordValidationRes + '\n'
            + 'Password2: ' + password2ValidationRes);
        var apiBirthDateFormat = toApiFormat(inputBirthDate.value);
        if (validationResult(e)) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' 
            + inputName.value + '&lastName=' + inputSurname.value + '&dni=' + 
            inputDni.value + '&dob=' + apiBirthDateFormat + '&phone=' + 
            inputPhone.value + '&address=' + inputAddress.value + '&city=' + 
            inputLocation.value + '&zip=' + inputPostalCode.value + '&email=' + 
            inputEmail.value + '&password=' + inputPassword.value)
                .then(function (response) {
                    return response.json();
                })
                .then(function (jsonResponse) {
                    jsonResponseMsg = jsonResponse.msg;
                    console.log("json", jsonResponse);
                    if (jsonResponse.success) {
                        console.log("Good", jsonResponse);
                        if (jsonResponse.success == true) {
                            localStorage.setItem('id', jsonResponse.data.id);
                            localStorage.setItem('name', jsonResponse.data.name);
                            localStorage.setItem('surname', jsonResponse.data.lastName);
                            localStorage.setItem('dni', jsonResponse.data.dni);
                            localStorage.setItem('birthDate', jsonResponse.data.dob);
                            localStorage.setItem('phone', jsonResponse.data.phone);
                            localStorage.setItem('address', jsonResponse.data.address);
                            localStorage.setItem('location', jsonResponse.data.city);
                            localStorage.setItem('postalCode', jsonResponse.data.zip);
                            localStorage.setItem('email', jsonResponse.data.email);
                            localStorage.setItem('password', jsonResponse.data.password);
                        }
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