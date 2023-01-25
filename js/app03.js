let WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

let myTeam = [
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


let getRandom = (a, b) => Math.round(Math.random()) ? a : b;


// let searchAvailability = (array) => {
//     let found = false;
//     let hour = undefined;
//     for (schedule in array) {
//         for (let x = 0; x < array[schedule].availability.length; x++) {
//             console.log(schedule.availability[x]);
//             if (!array[schedule].availability[x]) {
//                 return found = false;
//             } else {
//                 hour = WORK_HOURS[x];
//                 found = true;
//             }
//         }
//     }
//     if (found) {
//     } else {

//     }

// }

let printSchedule = (array) => {
    for (worker of array) {
        console.log("Disponibilidad de " + worker.name);
        for (let i = 0; i < worker.availability.length; i++) {
            if (getRandom(true, false)) {
                console.log(WORK_HOURS[i] + ": Sí");
            } else {
                console.log(WORK_HOURS[i] + ": No");
            }
        }
    }
    searchAvailability(myTeam);
}
printSchedule(myTeam);

let freeHour = [];
let searchAvailability = (array1, array2) => {
    for (worker of array1) {
        for (let i = 0; i < worker.availability.length; i++) {
            console.log(worker[i].availability[i]);
            // for (let x = 0; x < WORK_HOURS.length; x++) {
            if (worker.availability[i] && worker.availability[i]) {
                array2.push(WORK_HOURS[i]);
                console.log("Hueco encontrado en el horario de " + WORK_HOURS[i]);
            } else if (!found) {
                console.log("Lo siento. No hay hueco disponible en el equipo.");

            }
        }
    }

}
searchAvailability(myTeam, freeHour);

