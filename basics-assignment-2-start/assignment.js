const task3Element = document.getElementById('task-3');

function greet() {
    alert('Hi Guest!!!');
}

function greetUser(name) {
    alert('Hi ' + name + '!!!');
}

greet();
greetUser('Ram');
task3Element.addEventListener('click', greet);

function getFullName(firstName, middleName, lastName) {
    // return firstName + middleName + lastName;
    return `${firstName} ${middleName} ${lastName}`
}

alert(getFullName('Rama', 'Moorthy', 'SP'));