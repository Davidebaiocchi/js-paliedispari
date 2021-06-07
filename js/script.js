// Pari e Dispari: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto

// l'utente sceglie pari o dispari:
var pariDispari = prompt('Pari o Dispari');
console.log(pariDispari);
var numberUser = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(numberUser);

// Generiamo un numero random sempre da 1 a 5:
function numberRandom() {
    var num = Math.round(Math.random() * 4) +1;
    return num;
}
var number = numberRandom();
console.log(number);

// Facciamo la somma dei due numeri:
var somma = numberUser + number;
console.log(somma);

// Scopriamo se la somma è pari o dispari:
var sommaPariDispari = pariODispari;

function pariODispari() {
    var risultato = 0;
    if (somma % 2 == 0) {
        risultato = 'Pari'
    } else {
        risultato = 'Dispari'
    }
    return risultato;
}   
var pariODispari = risultato;
console.log(pariOdispari);
