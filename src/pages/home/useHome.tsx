import { useState } from "react";

import { get } from "services/restService";

import { PokemonData, PokemonAPIResponse } from "types";

const useHome = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData>();
  const [error, setError] = useState(false);

  const getPokemon = async (query: string | number) => {
    try {
      setError(false);
      setPokemonData(undefined);
      const res = await get<PokemonAPIResponse>(query);
      setPokemonData({
        id: res.id,
        name: res.name,
        power: res.types[0].type.name,
        url: res.sprites.other.dream_world.front_default,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log("E", e);
      setError(true);
    }
  };

  const getPreviousPokemon = () => {
    if (pokemonData) {
      getPokemon(pokemonData.id - 1);
    }
  };

  const getNextPokemon = () => {
    if (pokemonData) {
      getPokemon(pokemonData.id + 1);
    }
  };

  return {
    pokemonData,
    getPokemon,
    getPreviousPokemon,
    getNextPokemon,
    error,
  };
};

export default useHome;
