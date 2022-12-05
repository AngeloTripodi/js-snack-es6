const zucchini = [
{
    type : "Italiana",
    weight : 120,
    length : 0.22
},
{
    type : "Brasiliana",
    weight : 130,
    length : 0.30
},
{
    type : "Russa",
    weight : 100,
    length : 0.88
},
{
    type : "Cinese",
    weight : 80,
    length : 0.02
},
{
    type : "Congolese",
    weight : 100,
    length : 1.22
},
{
    type : "Vietnamita",
    weight : 100,
    length : 1.42
},
{
    type : "Belga",
    weight : 120,
    length : 8.22
},
{
    type : "Spagnola",
    weight : 110,
    length : 9.22
},
{
    type : "Taiwanese",
    weight : 90,
    length : 122
},
{
    type : "Canadese",
    weight : 100,
    length : 1
},
]

sum = 0;
avgWeight = 0;
avgLenght = 0;
for (let i = 0; i<zucchini.length; i++){
    sum += zucchini[i].weight;
    avgWeight += zucchini[i].weight / zucchini.length;
    avgLenght += zucchini[i].length / zucchini.length;


}

console.log("Tutte le zucchine pesano" + " " + sum + "Kg");
console.log("Il peso medio è" + " " + avgWeight + "Kg");
console.log("La lunghezza media è " + " " + avgLenght + "cm");