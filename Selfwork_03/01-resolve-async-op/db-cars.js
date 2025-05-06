




function insertCar(newCar, databaseCars, cFn){
    setTimeout(() => {
        databaseCars.push(newCar);
        cFn();
    }, 1500);
}
function showDbCars(databaseCars){
    console.log(databaseCars);
}





const databaseCars = [ { brand: "BMW", model: "x-123" }, { brand: "Fiat", model: "500" } ];
const newCar = { brand: "Ferrari", model: "f-40" };

insertCar(newCar, databaseCars, () => showDbCars(databaseCars));