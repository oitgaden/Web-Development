function initializeRegistration() {
    $("#register-btn").click(validate);
}

function validate() {
    
    // document.getElementById('first-name-error').style.visibility = 'hidden';
    // document.getElementById('last-name-error').style.visibility = 'hidden';

    // var firstName = document.getElementById('first-name').value;
    // var lastName = document.getElementById('last-name').value;
    
    $("#first-name-error").hide();
    $("#last-name-error").hide();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();

    console.debug('First name: ' + firstName);

    console.debug('Last name: ' + lastName);

    if (firstName == '') {
        // document.getElementById('first-name-error').style.visibility = 'visible';
        $("#first-name-error").show();
    }

    if (lastName == '') {
        // document.getElementById('last-name-error').style.visibility = 'visible';
        $("#last-name-error").show();
    }

    document.cookie = `username=${firstName} ${lastName}; expires=31 Dec 2024 12:00:00 UTC; path=/`;
}