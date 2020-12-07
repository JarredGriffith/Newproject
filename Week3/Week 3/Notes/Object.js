let car = {
    make: "Subrau",
    model: "WRX STI",
    year: 2020,
    color: "Black",
    horsePower: 310,
    //methods inside of an object
    printCarBrandName: function() {
        console.log(this.make); //must use "this." when calling on the object that not been declared as an var
    }
};

console.log(car.model);
//calling the function 
car.printCarBrandName();