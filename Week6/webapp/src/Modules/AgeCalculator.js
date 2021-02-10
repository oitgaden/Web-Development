var moment = require('moment'); // node.js require

// function getAge(day, month, year)
// {
//     var today = new Date();
//     var birthDate = new Date(year, month, day);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }

function getAge(day, month, year)
{
    var age = moment().diff(`${year}-${month}-${day}`, 'years');

    return age;
}

export { getAge };