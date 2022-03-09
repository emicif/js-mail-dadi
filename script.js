console.log ('JS OK!')


//Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// prompt email
// lista array con mail per accesso
// la mail dell'utente è nella lista array?

// messaggio sull'esito del controllo

const email = [];

for(let i= 0; i < email.length; i++){

}


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const dadoPc = [];
const dadoUtente = [];

for(let i= 0; i < 1; i++){ // i<1 perché voglio solo un numero dei generati
    const number = Math.floor((Math.random()*6)+1); //trovo random 6 numeri
    dadoPc.push(number); // aggiungo il numero al mio array dadoPC
    console.log('Dado pc è ' + (dadoPc [i])); // scrivo array e numero (i)
}
for(let i= 0; i < 1; i++){
    const number = Math.floor((Math.random()*6)+1);
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




