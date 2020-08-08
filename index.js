

function insert_Row(name, position, office, age, start, paid = 'N/A') {
    let i = document.getElementById('tbody').insertRow(0);
    let c1 = i.insertCell(0);
    let c2 = i.insertCell(1);
    let c3 = i.insertCell(2);
    let c4 = i.insertCell(3);
    let c5 = i.insertCell(4);
    let c6 = i.insertCell(5);
    c1.innerHTML = name;
    c2.innerHTML = position;
    c3.innerHTML = office;
    c4.innerHTML = age;
    c5.innerHTML = start;
    c6.innerHTML = paid;
};

function insertRow() {
    let nameCol = document.getElementById('name').value;
    let positionCol = document.getElementById('position').value;
    let officeCol = document.getElementById('office').value;
    let ageCol = document.getElementById('age').value;
    let startCol = document.getElementById('start').value;
    let paidCol = document.getElementById('paid').value;
    insert_Row(nameCol, positionCol, officeCol, ageCol, startCol, paidCol);
}