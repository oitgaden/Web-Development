
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
}