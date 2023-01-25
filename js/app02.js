
//Crear un array vacío de longitud n

// var myEmptyArray = new Array(3);
// myEmptyArray[0] = "Adiós";
// console.log(myEmptyArray);

// Rellenar todas las posiciones de un array con el mismo valor:

// myEmptyArray.fill("Hola");
// console.log(myEmptyArray);

// En una sola línea:

// var myArray = new Array(3).fill("Hola");
// console.log(myArray);

// AGENDA

var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

var getRandom = (a, b) => Math.round(Math.random()) ? a : b;

//IMPORTANTE:
console.log(myTeam[1].availability[1]); //true
//Importante ^


function schedule() {
    for (worker of myTeam) {
        console.log("Disponibilidad de " + worker.name);
        for (var i = 0; i < worker.availability.length; i++) {
            worker.availability[i] = getRandom(true, false);
            if (worker.availability[i]) {
                console.log("Horarios", WORK_HOURS[i] + " " + "Sí")
            } else {
                console.log("Horarios", WORK_HOURS[i] + " " + "No")
            }
        }

    }
}
schedule();

function agenda() {
    for (worker of myTeam) {
        for (var i = 0; i < worker.availability.length; i++) {
            if (worker.availability[i] && WORK_HOURS[i]) {
                console.log("Hueco encontrado en el horario " + WORK_HOURS[i]);
            } else {
                console.log("Lo siento. No hay hueco disponible en el equipo.");
            }
        }
    }
}
agenda();

var myArray = [1, 3, 4, 5, 2, 9, 6, 7, 8];

/* IMPORTANTE, MÉTODO LARGO Y CORTO DEL ALGORITMO DE BÚSQUEDA:
var search = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}
console.log("Método largo; " + search(myArray, 2));

console.log("Método corto con indexOf: " + myArray.indexOf(2));
*/