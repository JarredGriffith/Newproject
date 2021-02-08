//this will change the text within the html doc from hello to not hello and only targets the element with the id of content. 
document.getElementById('content').innerHTML = 'Not Hello';


//this is will change content base on a click on a button. 

//gets button by id
let button = document.getElementById('btn');
//gets the p by id
let content = document.getElementById('button-change');

//this is where everything gets cchanged and the if staement is there to switch
button.addEventListener('click', ()=> {
    if(content.innerHTML == "this will only change when the button is clicked.") {
        content.innerHTML = 'Ive been clicked'
    } else {
        content.innerHTML = "this will only change when the button is clicked."
    }
});

//removes the text from the val made ^ 
document.getElementById('remove').addEventListener('click',()=> {
    content.parentNode.removeChild(content);
});

//addding text or elements
// this is setting the ID for elements going to be removed
let id = 0;
document.getElementById('add').addEventListener('click', ()=> {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id',id++);
    parent.appendChild(newElement)
    // this only clears out the feild when clicked. 
    document.getElementById('new-text').value = ''
});

//removes the text from the val made 
//getting the new text
let newtext = document.getElementById('paragraphs')

document.getElementById('remove-id-btn').addEventListener('click',()=> {
    let idtoremove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idtoremove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
});


