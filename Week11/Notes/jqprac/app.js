//grabing something using its ID
let p = $('#test');
//grabing something useing its class
let div = $('.my-class');
//grabing something by the element type
let ul = $('ul');
let input = $('input')

//this is how you get text from a element. use .text()
let texts = $('.testing')
console.log(texts.text()); 
//html() get the whole HTML tag
//val() get the val from like an input. 


let button  = $('.button'); 
console.log(button); 

//this is how you add a click event listener. 
button.click(()=> alert('You Clicked me!'));

let cells = $('.cell'); 
console.log(cells)

$('.cell').click(()=>alert($('.cell').text()))

