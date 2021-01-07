/*
Cars
Brand 
Model

Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements
*/

class Car {
    constructor(model,year) {
        this.year = year;
        this.model = model; 
    }
    displayCar() {
        return `The car is a ${this.year} ${this.model}`; 
    }
}

 class CarBrand {
     constructor(brandname){
         this.brandname = brandname; 
         this.car = [];  
     }

     creatcar(cars){
         if(car instanceof Car) {
             this.car.push(cars);
         } else{ throw new Error(`Failed to add car to array`)}
     }
 }

 class Menu {
     constructor () {
         this.brand = []; 
         this.brandselected = null; 
     }

     //start of the app
     start() {
         let select = this.mainMenu(); 
         while(select != '0') {
             switch(select) {
                case '1': 
                 this.creatcar() 
                 break; 
                case '2':
                 this.delete()
                 break;
                case '3':
                 this.viewBrands()
                 break; 
                 case '4':
                 this.viewAllBrands()
                 break; 
                default:
                    select = '0';  
             }
           select = this.mainMenu();  
         }
         alert(`You now are exiting the app menu`); 
     }
     // main menu
     mainMenu(){
         return prompt(`
         0 : Exit
         1 : Create
         2 : Delete Brand
         3 : View Brands
         4 : View all Brands
         `)
     }
     // menu to add or delete car models
     showCarBrandsOptions(showinfo) {
         return prompt(` 
         0 - back
         1 - Create Car Model
         2 - Delete Car Model

         Currernt Brand Selected : ${showinfo}
         `)
     }
     // shows all current Car brands 
    viewAllBrands() {
        let carBrands = ''; 
        for (let i = 0;i<this.brand.length; i++){ 
            carBrands += i + ' - ' + this.brand[i].brandname + '\n'
        }
        alert(carBrands); 
    }   
    //creates New car brand
    creatcar() {
        let brand = prompt('Provide new car brand name'); 
        this.brand.push(new CarBrand(brand)); 
    }

    //shows one brand and the models under the brand
    viewBrands() {
        let index = prompt('Enter brand you would like to see'); 
        if(index > -1 && index < this.brand.length){
            this.brandselected = this.brand[index]; 

            let des = this.brandselected.brandname + '\n';
            for (let i = 0; i<this.brandselected.car.length; i++){
                des += i + '-' + this.brandselected.car[i].model + ' ' + this.brandselected.car[i].year
            }
            let Selected = this.showCarBrandsOptions(des); 
            switch(Selected) {
                case '1':
                    this.createCarModel();
                    break;
                case '2':
                    this.deleteCarModel();  
            }

        }
    }
    //deletes brand
    delete() {
        let allBransForDisplay = ''
        for(let i =0;i<this.brand.length;i++) {
            allBransForDisplay += i + ' - ' + this.brand[i].brandname + '\n'
        }
        let index = prompt(`Please select one of the following to delete` + '\n' + allBransForDisplay); 
        if (index>-1 && index < this.brand.length) {
            this.brand.splice(index,1);
        }
    }


    //deleted and creates brand models
    createCarModel(){
        let newModel = prompt(`Enter car model name`); 
        let newYear = prompt(`Enter the year of the car`); 
        this.brandselected.car.push(new Car(newModel,newYear)); 
    }
    deleteCarModel() {
        let index = prompt(`Write out index of the model wsiehd to be deleted.`);
        if (index > -1 && index < this.brandselected.car.length ) {
            this.brandselected.car.splice(index,1);
        }
    }


 }

 let menu = new Menu();
 menu.start(); 