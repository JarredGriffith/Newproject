//grabing something using its ID
let p = $('#test');
//grabing something useing its class
let div = $('.my-class');
//grabing something by the element type
let ul = $('ul');
let input = $('input')

console.log(p); 
console.log(div); 
console.log(ul);

// if you use the .text with nothing in the () it will return the text
console.log(p.text());

//if you use .text with text in the () then it will change the value
p.text('new text'); 

//$('input').val('New value'); 

$('input').attr('placeholder','placeholder text')


 div.prepend('<p> perpened test </p>'); 
 div.append('<p> appended test </p>');
 div.before('<p> this is text adding before the div </p>'); 
div.after('<p> text added after the div </p>');


//remove element removes the element and its childen from the dom
ul.remove();
//emptiy remove all the childen from the dom
div.empty()


//hide hides element and show shows the element. 
input.hide(); 
setTimeout(() => { input.show()}, 2000);
