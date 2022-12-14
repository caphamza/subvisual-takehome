export interface PokemonData {
  id: number;
  name: string;
  url: string;
  power: string;
}

export interface PokemonAPIResponse {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}
