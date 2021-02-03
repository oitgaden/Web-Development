var persons = '{"persons": [{"firstName": "Tom", "lastName": "Smith"}, {"firstName": "Mary", "lastName": "Jones"}]}';

function initializePersons() {
    var data = getPersons();
    displayPersons(data.persons);
}

function getPersons() {
    return JSON.parse(persons);
}

function displayPersons(persons) {
    var tableList = "";
    for(var i = 0; i < persons.length; i++) {
        var firstName = persons[i].firstName;
        var lastName = persons[i].lastName;
        tableList += "<tr><td>" + firstName + "</td><td>" + lastName + "</td>";

        $("table tbody").append(tableList);
    }
}