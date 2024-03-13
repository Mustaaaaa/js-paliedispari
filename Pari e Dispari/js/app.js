/* User deve inserire un numero per determinare se ha scelto pari o dispari */
const user = prompt("Scegli tra pari e dispari!");

// let userchoice = user.value; chiedere informazione ai tutor

if (user === "pari") {
    console.log("User ha scelto pari");
    console.log("CPU ha scelto dispari");
} else {
    console.log("User ha scelto dispari.");
    console.log("CPU ha scelto pari.");
}

/* User sceglie un numero tra 1 e 5 e per il pc sarà casuale */
const nuser = parseInt(prompt("Inserisci un numero: tra 1 e 5"));
console.log("User ha scelto il numero " + nuser);
const ncomputer = Math.floor(Math.random() * 5) + 1;
console.log("CPU ha scelto il numero " + ncomputer)

/* carlcolare la somma dei numeri */
let somma = nuser + ncomputer;
console.log("La somma dei nmumeri é " + somma)

/* determinare la somma se è pari o dispari */
if (somma % 2 === 0) {
    console.log("La somma dei numeri è pari.");
} else {
    console.log("La somma dei numeri è dispari.");
}





