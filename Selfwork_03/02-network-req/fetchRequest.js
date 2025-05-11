

async function getData() {
    
    const url = "https://pokeapi.co/api/v2/pokemon";
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json.results;
      } catch (error) {
        console.error(error.message);
      }
}


async function createCard(pokemonUrl) {
    try {
      const response = await fetch(pokemonUrl);
      const pokemon = await response.json();
  
      const container = document.getElementById('root');
  
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
      img.alt = pokemon.name;
  
      const content = document.createElement('div');
      content.className = 'card-content';
  
      const name = document.createElement('h3');
      name.textContent = pokemon.name;
  
      const id = document.createElement('p');
      id.textContent = `#${pokemon.id}`;
  
      const typesContainer = document.createElement('div');
      typesContainer.className = 'types';
  
      pokemon.types.forEach(t => {
        const type = document.createElement('span');
        type.className = 'type';
        type.textContent = t.type.name;
        typesContainer.appendChild(type);
      });
  
      content.appendChild(name);
      content.appendChild(id);
      content.appendChild(typesContainer);
      card.appendChild(img);
      card.appendChild(content);
  
      container.appendChild(card);
    } catch (err) {
      console.error('Errore nel caricamento del Pokémon:', err);
    }
  }
  
  async function init() {
    const data = await getData();
    if (data) {
      data.forEach(pokemon => createCard(pokemon.url));
    }
  }
  
  init();