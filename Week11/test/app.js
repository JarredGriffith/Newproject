$.get('https://reqres.in/api/users/2', (data) => console.log(data))

//one way to do it
let table = $('#customer-table')
$.get('https://reqres.in/api/users/2', (data) => {
    $.each(data,(i,data)=>{
        let first = data.first_name; 
        let last = data.last_name; 
        let email = data.email;
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

//let table = $('#customer-table')
$.get('https://mytestapi.com', (data) => {
    $.each(data,(i,data)=>{
        let first = data.firstName; 
        let last = data.lastName; 
        let email = data.email; 
        table.append(`<tr><td>${first}</td><td>${last}</td><td>${email}</td></tr>`); 
    })
}
)