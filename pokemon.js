`
import * as data from 'pokemon.json';
const pokemon = data;
console.log(JSON.parse(pokemon))


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


const file = '/Users/kobenorcross/Documents/GitHub/Pokemon-Database'

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

Class Pokemon {
    // NUMBER,CODE,SERIAL,NAME,TYPE1,TYPE2,COLOR,ABILITY1,ABILITY2,ABILITY HIDDEN,GENERATION,LEGENDARY,MEGA_EVOLUTION,HEIGHT,WEIGHT,HP,ATK,DEF,SP_ATK,SP_DEF,SPD,TOTAL
    
}

Class Node {
    constructor (data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

Class Tree {
    constructor () {
        this.root = null
    }
    // various search functions
    searchByName () {

    }

    searchByNameR () {
        
    }
}