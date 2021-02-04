var personsData = '{"persons": [{"firstName": "Frank", "lastName": "Smith"}, {"firstName": "Mary", "lastName": "Jones"}]}';

function initializePersons() {
    let persons = getPersons(personsData);
    displayPersons(persons);
}

function getPersons(personsJSON) {
    let data = JSON.parse(personsJSON);
    return data.persons;
}

function displayPersons(persons) {
    var tableList = "";
    for(let i = 0; i < persons.length; i++) {
        let firstName = persons[i].firstName;
        let lastName = persons[i].lastName;
        tableList += "<tr><td>" + firstName + "</td><td>" + lastName + "</td>";
    }

    // document.getElementById("person-list").innerHTML = tableList;

    $("#person-list").append(tableList);
}

function add(value1, value2) {
    return value1 + value2;
}

exports.getPersons = getPersons;
exports.add = add;