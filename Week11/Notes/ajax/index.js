//get method
$.get('https://reqres.in/api/users/2', (data) => console.log(data))

//post your posting data in the case adding a new object
$.post('https://reqres.in/api/users', {
    name: 'Tommy', 
    job : 'Front End Software Developer'
}, (data) => console.log(data)); 