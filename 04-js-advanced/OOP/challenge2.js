class Vehicle {
    constructor (vehicleType,gear,steering, speed){
        this.vehicleType = vehicleType;
        this.gear = gear; 
        this.steering = steering;
        this.speed = speed
    }
    get getCurrentGear() {
        return `Current gear is ${this.gear}`
    }
    setNewGear(newGear) {
        return this.gear = newGear
    }

    get getCurrentSpeed() {
        return `Current speed is ${this.speed * this.gear}`
    }
    setNewSpeed (newSpeed) {
        return this.speed = newSpeed
    }

}

const myVehicle = new Vehicle("Car", 5,"left", 5, 60);
console.log(myVehicle);

class Car extends Vehicle {
    constructor(vehicleType,gear,steering, speed, make,isElectric) {
        super(vehicleType,gear,steering, speed)
            this.make = make; 
            this.isElectric = isElectric;
    
        }
}
const myCar = new Car("Car","5", "left", 60, "VW", false)
console.log(myCar);

class Tesla extends Car {
    constructor (vehicleType,gear,steering, speed, make, isElectric, year, colour) {
    super(vehicleType,gear,steering, speed, make,isElectric)
     this.year = year;
     this.colour = colour;
    }
}
const myTesla = new Tesla("car", 6, "right", 50, "Tesla", true, 2020, "yellow");
console.log(myTesla);

console.log(myTesla.getCurrentGear)
console.log(myTesla.setNewGear(7))
console.log(myTesla.getCurrentGear)
console.log(myTesla.getCurrentSpeed)