function validate() {
    
    document.getElementById('first-name-error').style.visibility = 'hidden';
    document.getElementById('last-name-error').style.visibility = 'hidden';

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;

    console.debug('First name: ' + firstName);

    console.debug('Last name: ' + lastName);

    if (firstName == '') {
        document.getElementById('first-name-error').style.visibility = 'visible';
    }

    if (lastName == '') {
        document.getElementById('last-name-error').style.visibility = 'visible';
    }

    document.cookie = `username=${firstName} ${lastName}; expires=31 Dec 2024 12:00:00 UTC; path=/`;
}