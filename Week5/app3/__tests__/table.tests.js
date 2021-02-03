const {getPersons, add} = require("../scripts/table");

test("Should return correct persons object", () => {
    // arrange
    let personsData = '{"persons": [{"firstName": "Frank", "lastName": "Smith"}, {"firstName": "Mary", "lastName": "Jones"}]}';

    // act
    let persons = getPersons(personsData);

    // assert
    expect(persons.length).toBe(2);
    expect(persons[0].firstName).toBe('Frank');
});

test("Should return correct sum", () => {
    let sum = add(10, 20);
    expect(sum).toBe(30);
});