const fetchDitto = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json());
};
 
const fetchCharizard = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(response => response.json());
};
 
const fetchPikachu = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json());
};
 
const start = performance.now();
 
fetchDitto()
  .then(ditto => {
    console.log(ditto);
    return fetchCharizard();
  })
  .then(charizard => {
    console.log(charizard);
    return fetchPikachu();
  })
  .then(pikachu => {
    console.log(pikachu);
    const end = performance.now();
    console.log(`Tempo di esecuzione: ${end - start} millisecondi`);
});
