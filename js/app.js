
// AGENDA

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
let freeHour = new Array(8).fill(true);

let schedule = (array) => {
    for (worker of array) {
        console.log("Disponibilidad de " + worker.name);
        for (var i = 0; i < WORK_HOURS.length; i++) {
            worker.availability[i] = getRandom(true, false);
            worker.availability[i] ? console.log(WORK_HOURS[i] + " " + "Sí") : console.log(WORK_HOURS[i] + " " + "No");
        }
    }
}
schedule(myTeam);

let searchAvailability = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        for (let x = 0; x < WORK_HOURS.length; x++) {
            array1[i].availability[x] && array2[x] ? array2[x] = true : array2[x] = false;
        }
    }
}
searchAvailability(myTeam, freeHour);

let showAvailability = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) console.log("Hueco encontrado en el horario de " + WORK_HOURS[i]);
    }
    let isFalse = array.every(value => value === false);
    if (isFalse) console.log(" - Lo siento. No hay hueco disponible.");
}
showAvailability(freeHour);

//CALCULADORA DE CAMBIO:

var price = () => parseFloat(document.getElementById("input-price").value);
var amount = () => parseFloat(document.getElementById("input-amount").value);

var billsCoins = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
var totalChange = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cashChange = [0, 0, 0, 0, 10, 0, 10, 10, 0, 10, 10, 10, 10, 10];
var change = 0;

let getChange = () => {
    change = (amount() - price()).toFixed(2);
    document.getElementById("change").innerHTML = "Cambio para el cliente: " + change + " €" + "\n";
    return change;
}

let total = () => {
    getChange();
    for (let i = 0; i < billsCoins.length; i++) {
        var bills = billsCoins[i];
        var tChange = totalChange[i];
        while (change - bills >= 0.00 && cashChange[i] > 0) {
            change = (change - bills).toFixed(2);
            cashChange[i] -= 1;
            var cash = parseInt(bills * cashChange[i]).toFixed(2);
            ++tChange;
        }
        var text = document.createTextNode("Devuelve " + tChange + " de " + bills + " € \n");
        if (tChange > 0) document.getElementById("result").appendChild(text);
        if (cash === 0.00) document.getElementById("result").innerText = "No hay cambio suficiente.";
    }
}

document.getElementById("button-equal").addEventListener("click", total);
