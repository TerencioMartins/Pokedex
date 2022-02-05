const fetchPokemon = async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    const api = await fetch(url);
    const apiJSON = await api.json();
    return apiJSON;
}

const printPokemons = async () => {

    loadBar();

    for (let aux = 1; aux <= 891; aux += 1) {       
        const { sprites: { front_default: imgUrl }, name: pokemonName} = await fetchPokemon(aux);
    
        createElement('div', '', 'pokedex', 'pokemon-container', `${pokemonName}`);
        createImg('img', `${imgUrl}`, `${pokemonName}`, 'pokemon-img',);
        createElement('p', `${pokemonName}`, `${pokemonName}`, 'pokemon-name',);
        
    };

    loadKiller();
}

const createElement = (element, inner, father, className, idName) => {
    const elemento = document.createElement(element);
    const fatherElement = document.getElementById(father);
    elemento.id = idName;
    elemento.className = className;
    elemento.innerHTML = inner;
    fatherElement.appendChild(elemento);
}

const createImg = (element, src, father, className, idName) => {
    const elemento = document.createElement(element);
    const fatherElement = document.getElementById(father);
    elemento.id = idName;
    elemento.className = className;
    elemento.src = src;
    fatherElement.appendChild(elemento);
}

const loadBar = () => {
    const loadPlace = document.getElementById('loadPlace');
    const loading = document.createElement('h1');
    loading.innerText = 'Carregando...';
    loadPlace.appendChild(loading);
};

const loadKiller = () => {
    loadPlace.remove();
};

window.onload = () => {
    printPokemons();    
}