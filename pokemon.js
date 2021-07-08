`const pokemon = require('pokemon.json');
console.log(pokemon)
`

fetch("./pokemon.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));