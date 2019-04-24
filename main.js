// Chiedi all’utente il cognome,
var cognome = prompt ('qual è il tuo cognome?')
// inseriscilo in un array con altri cognomi e stampa la lista
var cognomi = ['martino', 'choi', 'cattalini']
cognomi.push(cognome)
console.log(cognomi);
// ordinata alfabeticamente.
cognomi.sort();
console.log(cognomi);
// Scrivi a che posizione della lista il nuovo utente si trova
var i=0;
while (i<cognomi.lenght) {
  if (lista_cognomi[i]===cognome){console.log(i);}
  i++;
}
