//function createFullName(firstName, lastName) {
   // return firstName + " " + lastName;
 // }

 const createFullName = (firstName,lastName) => {
     return firstName + " " + lastName;
 } 
 console.log(createFullName("jarred","griffith"));

  
  const doubleNumber = (number) => { return number * 2;}
  console.log(doubleNumber(2));

  const getEvenNumbers = (array) => { 
      let evenNumbers = []; 
      for (let i of array) {
          if(i % 2 === 0) {
              evenNumbers.push(i);
          }
      }
      return evenNumbers; 
  }

  console.log(getEvenNumbers([1,2,3,4,5,6]));

/////////////////////////////////////////////////////

  const customers = [
    {
        name: 'Cam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    //more customers with the same schema
    {
        name: 'Cam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'PLATINUM',
        age: 32
    },
];


//console.log(customers.map(items => items.name))

const customerSocks = (name,address,city,state,membership,age) => {
    let firstLetters = name.map(x => x[0]);
  //  let add = address.map(i => i.address);
   // let cit = city.map(i => i.city);
    //let states = state.map(i => i.state);
    //let member = membership.map(i => i.membership);
    //let ages = age.map(i => i.age);

  console.log(firstLetters);
    
  //if(firstLetters== "C" ) { console.log(firstLetters);}
}

customerSocks(customers.map(items => items.name),customers.map(items => items.address))