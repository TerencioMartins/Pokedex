const fetchPokemon = async (pokemon) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
        const api = await fetch(url)
        const apiJSON = await api.json()
        return apiJSON;
    }
    catch (error) {
        console.log("erro");
    }

}

const createPokemon = async () => {
    for (let id = 1; id <= 891; id++) {
        const { sprites: { front_default: imgURL }, name: pokemonName } = await fetchPokemon(id)
        createElement('li', "", 'pokemons', 'pokemonClass animate__animated animate__fadeIn', `${pokemonName}`)
        createElement('button', `${pokemonName}`, `${pokemonName}`, 'pokemons2', `pokemon ${pokemonName}`)
        createSprite('img', `${imgURL}`, `${pokemonName}`, 'pokemonSprites', `Sprite ${pokemonName}`)
    }
}

const createElement = (element, inner, father, className, idName) => {
    const elemento = document.createElement(element)
    const elementoPai = document.getElementById(father)
    elemento.id = idName;
    elemento.className = className;
    elemento.innerHTML = inner;
    elementoPai.appendChild(elemento);
}

const createSprite = (element, src, father, className, idName) => {
    const sprite = document.createElement(element)
    const spritePai = document.getElementById(father)
    sprite.id = idName;
    sprite.className = className;
    sprite.src = src;
    spritePai.appendChild(sprite)
}

const botaoProcura = document.querySelector('.botaoProcura')
botaoProcura.addEventListener('click', async (event) => {
    event.preventDefault();
    const sumir = document.getElementById('pokemons');
    sumir.remove();
    const digitado = document.querySelector('.procurarPokemon');
    const input = digitado.value;

    const { sprites: { front_default: imgURL } } = await fetchPokemon(input);
    createElement('ul', "", "papai", 'divPokemons', 'pokemons');
    createElement('li', "", 'pokemons', 'pokemonClass animate__animated animate__fadeIn', input);
    createElement('button', input, input, 'pokemons2', 'pokemon' + input);
    createSprite('img', `${imgURL}`, input, 'pokemonSprites', `Sprite` + input);

    console.log(input);
})
const botaoReload = document.querySelector('.buttonPokedex')
botaoReload.addEventListener('click', ()=> {
    location.reload()
})

window.onload = await createPokemon();