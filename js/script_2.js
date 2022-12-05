const carsList = [ 
    {
        brand : "Fiat",
        model : 500,
        supply : "Diesel"
    },
    {
        brand : "Ferrari",
        model : "F-22",
        supply : "Benzina"
    },
    {
        brand : "Jaguar",
        model : "Jaguarosa",
        supply : "Gpl"
    },
    {
        brand : "Jaguar",
        model : "Jaguarina",
        supply : "Gpl"
    },
    {
        brand : "Renault",
        model : "A",
        supply : "Elettrico"
    },
    {
        brand : "Ford",
        model : "Kuga",
        supply : "Metano"
    },
    {
        brand : "Renault",
        model : "Clio",
        supply : "Diesel"
    },
    {
        brand : "Fiat",
        model : "600",
        supply : "Elettrico"
    },
    {
        brand : "Jeep",
        model : "Renegade",
        supply : "Benzina"
    },
    {
        brand : "Lamborghini",
        model : "Huracan",
        supply : "Elettrico"
    }
];

const car = {
    brand : "ferrari",
    model : "f-10",
    supply : "Benzina"
}



   

let dieselCars = []
let benzinaCars = []
let otherCars = []

for (let i=0; i<carsList.length; i++){
   if (carsList[i].supply ==='Benzina'){
    benzinaCars.push(carsList[i])
   }
   else if (carsList[i].supply ==='Diesel'){
    dieselCars.push(carsList[i])
   }
}

console.log(benzinaCars, dieselCars)

