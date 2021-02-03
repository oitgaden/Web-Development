function initializeRegistration() {
    $("#register-btn").click(validate);
}

function validate() {
    
    $("#first-name-error").hide();
    $("#last-name-error").hide();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();

    if (firstName == '') {
        $("#first-name-error").show();
        return;
    }

    if (lastName == '') {
        $("#last-name-error").show();
        return;
    }

    window.location = 'index.html';
}