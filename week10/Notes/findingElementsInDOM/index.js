//below will find the element by id on the index.html page. 
let button = document.getElementById('my-button');
console.log(button);

//this will find the elements by the tag name on the index.html page.
let buttonByTag = document.getElementsByTagName('button');
console.log(buttonByTag);

//this will find elements bby their class name on the index.html page.
let buttonByclassName = document.getElementsByClassName("my-class"); 
console.log(buttonByclassName)

// this will only find elements that are a buttun and have the class "my-class"
// you can remove the "button part if you wanted too, but it wil grap all elements eithe the class "my-class"
let buttonByCSSslector = document.querySelectorAll('button.my-class')
console.log(buttonByCSSslector)