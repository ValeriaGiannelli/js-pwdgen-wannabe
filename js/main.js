/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23 */

// chiedi il nmome
let yourName = prompt('scrivi il tuo nome');

console.log(yourName);

// chiedi il cognome
let surname = prompt('scrivi il tuo cognonome');

console.log(surname);

// chiedi il colore preferito
let favouriteColor = prompt('scrivi il tuo colore preferito');

console.log(favouriteColor);


// unisci le tre informazioni sopra con 23 finale
let result = yourName + surname + favouriteColor + 23;

console.log(result);


// stampa in pagina
document.getElementById('password').innerHTML = result;