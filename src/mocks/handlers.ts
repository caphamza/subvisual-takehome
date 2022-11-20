import { rest } from "msw";

const pokemon = {
  id: 1,
  name: "nidorine",
  sprites: {
    other: {
      dream_world: {
        front_default:
          // eslint-disable-next-line max-len
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
      },
    },
  },
  types: [
    {
      type: {
        name: '"poison',
      },
    },
  ],
};

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/1", (req, res, ctx) => {
    return res(ctx.json(pokemon));
  }),

  rest.get("https://pokeapi.co/api/v2/pokemon/nidorine", (req, res, ctx) => {
    return res(ctx.json(pokemon));
  }),

  rest.get("https://pokeapi.co/api/v2/pokemon/xyz", (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
