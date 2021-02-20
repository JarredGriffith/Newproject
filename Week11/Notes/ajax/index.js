//get method get data.
$.get('https://reqres.in/api/users/2', (data) => console.log(data))

//post your posting data in the case adding a new object
$.post('https://reqres.in/api/users', {
    name: 'Tommy',
    job: 'Front End Software Developer'
}, (data) => console.log(data));

//on click sends a get request on the data. 
$('.button').on('click', () => {
    $.get('https://reqres.in/api/users/2', (data) => console.log(data))


})

let div = $('.text')

//sends a post request on a click. 
$('.Send-Request').on('click', () => { //this is a function 
    //post URL
    //val for the the p being made
     let name,job; 
    $.post('https://reqres.in/api/users', {
        //the input vals
        name: $('.name').val(),
        job: $('.job').val()
        //runs another function that displays the post then clears the data.
    }, (some) => {console.log(some)
        //pushing the name inputs
     name = $('.name').val() 
     job =  $('.job').val(); 
     //clearing the name inputs
    $('.name').val('')
    $('.job').val(''); 
    //creating the p element and pushing vals. 
    div.append(`<p> ${name}  ${job}</p>`)        
        }
    );
})