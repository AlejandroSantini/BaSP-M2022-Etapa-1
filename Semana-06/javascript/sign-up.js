window.onload = function() {
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
    var birthDatelidationRes;
    var phoneValidationRes;
    var addressValidationRes;
    var locationValidationRes;
    var postalCodeValidationRes;
    var emailValidationRes;
    var passwordValidationRes;
    var password2ValidationRes;

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
    button.addEventListener('click', buttonSubmit);

    function nameValidator(e) {
        e.preventDefault();
        if (inputName.value == 'ale') {
            nameValidationRes = inputName.value + '   | Valid name |';
            console.log('1');
        } else {
            nameValidationRes = inputName.value + '   | Incomplete or invalid name! |';
            console.log('2');
        }
    }

    function surnameValidator(e) {
        e.preventDefault();
        if (inputSurname.value == 'ale') {
            surnameValidationRes = inputSurname.value + '   | Valid surname |';
            console.log('1');
        } else {
            surnameValidationRes = inputSurname.value + '   | Incomplete or invalid surname! |';
            console.log('2');
        }
    }

    function dniValidator(e) {
        e.preventDefault();
        if (inputDni.value == 'ale') {
            dniValidationRes = inputDni.value + '   | Valid dni |';
            console.log('1');
        } else {
            dniValidationRes = inputDni.value + '   | Incomplete or invalid dni! |';
            console.log('2');
        }
    }

    function birthDateValidator(e) {
        e.preventDefault();
        if (inputBirthDate.value == 'ale') {
            birthDateValidationRes = inputBirthDate.value + '   | Valid birth date |';
            console.log('1');
        } else {
            birthDateValidationRes = inputBirthDate.value + '   | Incomplete or invalid birth date! |';
            console.log('2');
        }
    }

    function phoneValidator(e) {
        e.preventDefault();
        if (inputPhone.value == 'ale') {
            phoneValidationRes = inputPhone.value + '   | Valid phone |';
            console.log('1');
        } else {
            phoneValidationRes = inputPhone.value + '   | Incomplete or invalid phone! |';
            console.log('2');
        }
    }

    function addressValidator(e) {
        e.preventDefault();
        if (inputAddress.value == 'ale') {
            addressValidationRes = inputAddress.value + '   | Valid address |';
            console.log('1');
        } else {
            addressValidationRes = inputAddress.value + '   | Incomplete or invalid address! |';
            console.log('2');
        }
    }

    function locationValidator(e) {
        e.preventDefault();
        if (inputLocation.value == 'ale') {
            locationValidationRes = inputLocation.value + '   | Valid location |';
            console.log('1');
        } else {
            locationValidationRes = inputLocation.value + '   | Incomplete or invalid location! |';
            console.log('2');
        }
    }

    function postalCodeValidator(e) {
        e.preventDefault();
        if (inputPostalCode.value == 'ale') {
            postalCodeValidationRes = inputPostalCode.value + '   | Valid postal code |';
            console.log('1');
        } else {
            postalCodeValidationRes = inputPostalCode.value + '   | Incomplete or invalid postal code! |';
            console.log('2');
        }
    }

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
        if (inputPassword2.value == '123') {
            passwordValidationRes = inputPassword.value + '  | Valid pasword |';
        } else {
            passwordValidationRes = inputPassword.value + '   | Incomplete or invalid password! |';
        }
    }

    function password2Validator(e) {
        e.preventDefault();
        if (inputPassword2.value == '123') {
            password2ValidationRes = inputPassword2.value + '  | Valid pasword |';
        } else {
            password2ValidationRes = inputPassword2.value + '   | Incomplete or invalid password! |';
        }
    }

    function buttonSubmit(e) {
        e.preventDefault();
        alert(+ 'Name: ' + nameValidationRes + '\n'
            + 'Surname: ' + surnameValidationRes + '\n'
            + 'DNI: ' + dniValidationRes + '\n'
            + 'Birth daste: ' + birthDateValidationRes + '\n'
            + 'Phone: ' + phoneValidationRes + '\n'
            + 'Address: ' + addressValidationRes + '\n'
            + 'Location: ' + locationValidationRes + '\n'
            + 'Postal code: ' + postalCodeValidationRes + '\n'
            + 'Email: ' + emailValidationRes + '\n' 
            + 'Password: ' + passwordValidationRes + '\n'
            + 'Password2: ' + password2ValidationRes);
    }
}