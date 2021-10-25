import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokeList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then(({ data }) => {
        setPokemons(data.results);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  }, []);

  return (
    <>
      <h2>Woohoo!</h2>
      <ul>
        {pokemons.map((pokemon) => {
          return <li>{pokemon.name}</li>;
        })}
      </ul>
    </>
  );
}
