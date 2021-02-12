let id = 0;

document.getElementById('add').addEventListener('click', () => {
    //get the table
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    //seting the id and creating inputing the data in the rows
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('res-name').value;
    row.insertCell(1).innerHTML = document.getElementById('res-date').value;
    row.insertCell(2).innerHTML = document.getElementById('res-time').value;
    row.insertCell(3).innerHTML = document.getElementById('num-guest').value;
     //sets the id for the row
     let ids = id++
    //creates the delete button
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(ids));
    //creates the arrival button and assigns the parameters
    let arrived = row.insertCell(5);
    arrived.appendChild(arrivedGuest(ids, document.getElementById('res-name').value, document.getElementById('res-date').value, document.getElementById('res-time').value, document.getElementById('num-guest').value));
    //clears the feilds when form is submited
    document.getElementById('res-name').value = '';
    document.getElementById('res-date').value = '';
    document.getElementById('res-time').value = '';
    document.getElementById('num-guest').value = '';
})

//makes the delete button and the finction to delete the row when clicked. 
function createDeleteButton(id) {
    //this creats the button
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete Res'
    //this performs the action so the deleting of the row.
    btn.onclick = () => {
        console.log(`Deleting row with ID : test-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete)
    }
    return btn
}


// This make the Arrived button and then run arrivedTablecreat function and deleteds it from the Wait list table
function arrivedGuest(id, n, d, t, num) {
    //creates button
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.id = id;
    btn.innerHTML = 'Arrived'
    // on click runs function arrivedTableCreat and then deletes row from table and console logs.
    btn.onclick = () => {
        arrivedTableCreate(n, d, t, num)
        console.log(`Moving row with ID : test-${id} to Arrived table.`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn
}

// this create a new row in the arrived table.
function arrivedTableCreate(name, date, time, num) {
    let table = document.getElementById('arrived');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = date;
    row.insertCell(2).innerHTML = time;
    row.insertCell(3).innerHTML = num;
}