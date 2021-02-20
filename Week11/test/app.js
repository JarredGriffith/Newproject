//$.get('https://reqres.in/api/users?page=2', (data,i,s) => console.log(s))

//one way to do it
let table = $('#customer-table')
$.get('https://reqres.in/api/users?page=2', (poeple) => {
//when making this request it comes back with more than just the array, do you need to put the .data you only grab the objcet 
//the for each goes over each element in the object. the .data is the obect with the users in it. 
    $.each(poeple.data,(i,arr)=>{
        console.log(arr.first_name)
        let first = arr.first_name; 
        let last = arr.last_name; 
       let email = arr.email;
       table.append(`<tr><td>${first}</td><td>${last}</td><td>${email}</td></tr>`);
    })
}
)
//even clear way to make the request and make a row.
$.get('https://reqres.in/api/users/2', (data) => {
    $.each(data,(i,data)=>{
        table.append(`<tr><td>${data.first_name}</td><td>${data.last_name}</td><td>${data.email}</td></tr>`);
    })
})

//
/*
//let table = $('#customer-table')
$.get('https://mytestapi.com', (data) => {
    $.each(data,(i,data)=>{
        let first = data.firstName; 
        let last = data.lastName; 
        let email = data.email; 
        table.append(`<tr><td>${first}</td><td>${last}</td><td>${email}</td></tr>`); 
    })
}
) */