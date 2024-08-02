const fetchDitto = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) =>
      response.json()
    );
  };
  
  const fetchCharizard = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/charizard").then((response) =>
      response.json()
    );
  };
  
  const fetchPikachu = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) =>
      response.json()
    );
  };
  const start = performance.now();
  fetchDitto();
  fetchCharizard();
  fetchPikachu();
  const end = performance.now();
  console.log(`Tempo di esecuzione: ${end - start} millisecondi`);