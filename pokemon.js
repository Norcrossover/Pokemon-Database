import * as data from 'pokemon.json';
const pokemon = data;
console.log(JSON.parse(pokemon))

`
let pokemon;    
fetch('pokemon.json').then(
        function(u){ return u.json();}
      ).then(
        function(json){
          pokemon = json;
        }
      )


async function getData(url) {
    const response = await fetch(url);

    return response.json();
}

const pokemon = getData('pokemon.json');

console.log({ pokemon })
`