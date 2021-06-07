// Palidroma: Chiedere all’utente di inserire una parola. 
// Creare una funzione per capire se la parola inserita è palindroma

// chiedere parola
var parola = prompt('inserisci una parola');
console.log(parola);

// girare la parola e r confrontarla con quella iniziale
var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }

function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}

