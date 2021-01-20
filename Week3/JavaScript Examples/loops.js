var students = ['Tom', 'Mary'];

for (i = 0; i < students.length; i++) {
    console.log(students[i]);
}

function display(item, index) {
    console.log(item);
}

students.forEach(display);