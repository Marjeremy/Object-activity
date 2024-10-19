const car = {
    type: "Dodge",
    model: "Challenger",
    color: "Black"
};

console.log("Type of car:", typeof car);

car.type = "Dodge";
console.log("Update car object:", car);

car.wheels = 4;
console.log("Car object after adding wheels:", car);