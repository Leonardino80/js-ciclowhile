// Chiedi all’utente il cognome,
var cognome = prompt ('qual è il tuo cognome?')
// inseriscilo in un array con altri cognomi e stampa la lista
var lista_cognomi = ['martino', 'choi', 'cattalini']
lista_cognomi.push(cognome)
console.log(lista_cognomi);
// ordinata alfabeticamente.
lista_cognomi.sort();
console.log(lista_cognomi);
// Scrivi a che posizione della lista il nuovo utente si trova
var i=0;
while (i<lista_cognomi.lenght) {
  if (lista_cognomi[i]===cognome){console.log(i);}
  i++;
}
