const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: 'undefined',//'85308',
            state: 'AZ'
        },
        membershipLevel: 'PLATINUM',
        age: 33
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
        age: 33
    },
    {
        name: 'Smith',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 20
    },
];


let customersThat = []

 function costomersSocks(items) {
     let lengths = items.length
    for(i = 0; i<lengths; i++) {

        if(items[i].name[0] == "S"  
        && items[i].address.street!=='undefined' 
        && items[i].address.city=='Peoria' 
        && items[i].address.state=='AZ' && items[i].address.zip!=='undefined'
        && (items[i].membershipLevel=="GOLD" || items[i].membershipLevel=="PLATINUM" || items[i].age<29)
        && items[i].age % items[i].name.length === 0
        )
         { 
             customersThat.push(items[i]);
           // console.log(items[i].age % items[i].name.length);
           // console.log(customersThat)
        }
        //else {console.log("didnt Work")}
    }
}
costomersSocks(customers);
console.log(customersThat);
console.log(customers);
/*
function findMax() {
    var i;
    var max = -Infinity;
    for(i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  } 
 console.log(findMax(4, 5, 6));
 
var orders = [
    { drink: 'Cappuccino', name: 'John Appleseed' }, 
    { drink: 'Espresso', name: 'Mya Stuart' },
    { drink: 'Cappuccino', name: 'Emma Berry' }
    ];
    var check_orders = orders.filter(order => (order.name === "John Appleseed"));
    console.log(check_orders);
    */