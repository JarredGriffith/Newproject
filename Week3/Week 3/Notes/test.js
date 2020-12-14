let customers = {
    customer:{name:[],purchasedItems:[], 
        tom:{name:"tom",purchasedItems:["Milke","egg","sugar"]}, 
        lucy:{name:"lucy",purchasedItems:["Milke","egg","sugar","soda","apple","pare"]}
    }}
    let allCustomersover5 = []; 

function customerOver5Items (names,item) {

if (item>5) { allCustomersover5.push(names) };
console.log(allCustomersover5)
} 

customerOver5Items(customers.name,Object.keys(customers.purchasedItems));
