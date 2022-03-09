console.log ('JS OK!')

// EMAIL
//Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// prompt email
// lista array con mail per accesso
// la mail dell'utente è nella lista array?

// messaggio sull'esito del controllo
let email = [];
let emailAccesso = ["emanuela.cifolelli@gmail.com"];

for(let i = 0; i < 1; i++){ //inizio il ciclo e capisco la lunghezza dell'array
    value = prompt('Inserisci la tua e-mail'); //chiedo all'utente l'email
    email.push(value); //aggiungo l'email al mio array "email"
    console.log('La tua email è ' + (email [i])); //stampo l'array con l'email dell'utente
} /*if ((email.length) === (emailAccesso.length)) { //se array email è uguale all'array emailAccesso - in questo modo sono SEMPRE UGUALI, perché vedo la lunghezza dell'array
    console.log ('ok');
} else {
    console.log ('NO OK')
}*/
    if(emailAccesso.includes(value)) { // controllo se all'interno dell'array emailAccesso c'è value (value = email inserita dall'utente)
        console.log ("Ok, sei già un utente registrato")
    } else {
        console.log ("Registrati!!")
    }


// DADO
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


let dadoPc = [];
let dadoUtente = [];

for(let i= 0; i < 1; i++){ // i<1 perché voglio solo un numero dei generati
    let number = Math.floor((Math.random()*6)+1); //trovo random 6 numeri
    dadoPc.push(number); // aggiungo il numero al mio array dadoPC
    console.log('Dado pc è ' + (dadoPc [i])); // scrivo array e numero (i)
}
for(let i= 0; i < 1; i++){
    let number = Math.floor((Math.random()*6)+1);
    dadoUtente.push(number);
    console.log('Dado utente è ' + (dadoUtente [i]));
}

if(dadoPc>dadoUtente) {
    console.log('Ha vinto il pc!!');
}else if (dadoPc<dadoUtente) {
    console.log('Hai vinto tu!!');
} else {
    console.log('Riprova!');
}




