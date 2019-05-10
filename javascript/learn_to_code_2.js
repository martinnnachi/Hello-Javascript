this.car = "Honda civic";

var martinsGarage = {
    car: "DB!!",
    getCar: function () {
        return this.car
    }
};

console.log(martinsGarage.getCar());

var storeGetCarForLater = martinsGarage.getCar;

console.log(storeGetCarForLater());

var theRealGetCarFunction = martinsGarage.getCar.bind(martinsGarage);

console.log(theRealGetCarFunction());
