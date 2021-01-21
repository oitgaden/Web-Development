function validate() {
    
    document.getElementById('first-name-error').style.visibility = 'hidden';
    document.getElementById('last-name-error').style.visibility = 'hidden';

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;

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