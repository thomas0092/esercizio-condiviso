const prima = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    return data;
  };
  const data = await prima();
  console.log(data);
  
  const seconda = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const data = await response.json();
    return data;
  };
  const data2 = await seconda();
  console.log(data2);
  
  const terza = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json();
    return data;
  };
  const data3 = await terza();
  console.log(data3);
  
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
  prima();
  seconda();
  terza();
  const end = performance.now();
  console.log(`Tempo di esecuzione: ${end - start} millisecondi`);