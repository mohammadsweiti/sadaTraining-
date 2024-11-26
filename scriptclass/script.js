


class car{
    #engineSize = 2200; // this is protected 
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    printCar(){
        console.log(`this  is car made by ${this.make} and it is model is ${this.model} in the year ${this.year}`);
        
    }
    
}


const car1 = new car("BMW","m5" , 2024);
car1.printCar();
const  car2 = new car("toyota", "new",2014);

const arr = [car1, car2];

console.log("for each");

arr.forEach((ele,index)=>{
    ele.printCar();
    console.log(index);
    
})


