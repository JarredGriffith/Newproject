const endPoint = "https://ancient-taiga-31359.herokuapp.com/api/houses"; 

//create
fetch(endPoint, {
	method: 'POST', 
  headers: {
  'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
  name: 'Fetch House'
  })
}); 

//delete
fetch(`${endPoint}/60502a4162c99c00177d2482`, {
	method: 'DELETE', 
  headers: {
  'Content-Type': 'application/json'
  }
}); 

// update
fetch(`${endPoint}/60502af362c99c00177d2483`, {
	method: 'PUT', 
  headers: {
  'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
  	name:'Fetch House', 
    rooms: [
    	{
      name: 'Front room', 
      area: '200'}, 
      {
      name: 'back room', 
      area: '400'} 
    ]
  })
}); 

//working with the promised from fetch the "then"
fetch(endPoint)
.then(res=> res.json())
.then(res=> {
  res.forEach(house => document.write(house.name + '<br>'))
});

//this is to get like a nested object in data.
fetch(endPoint)
.then(res=> res.json())
.then(res=> {
console.log(res[0].rooms[0].name)
});