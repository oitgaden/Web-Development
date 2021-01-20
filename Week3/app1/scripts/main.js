
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

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.onload = function display() {
    let username = getCookie("username");
    if (username !== '') {
        document.getElementById('greeting').innerHTML = `Welcome ${username}`;
    }
    
    document.getElementById('current-date').innerHTML = new Date().toDateString();
};