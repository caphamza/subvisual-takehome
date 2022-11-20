import { rest } from "msw";
import { baseURL } from "utils/constants";

const pokemon = {
  id: 1,
  name: "nidorine",
  sprites: {
    other: {
      "official-artwork": {
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
  rest.get(`${baseURL}1`, (req, res, ctx) => {
    return res(ctx.json(pokemon));
  }),

  rest.get(`${baseURL}nidorine`, (req, res, ctx) => {
    return res(ctx.json(pokemon));
  }),

  rest.get(`${baseURL}xyz`, (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
