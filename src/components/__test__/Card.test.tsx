import { render, screen } from "@testing-library/react";

import { Card } from "components";

const baseProps = {
  id: 1,
  name: "nidorine",
  // eslint-disable-next-line no-restricted-syntax, max-len
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
  power: "poison",
};

describe("Pokemon Card", () => {
  it("display pokemon", () => {
    render(<Card pokemonData={baseProps} error={false} />);
    const id = screen.getByText("#1");
    const name = screen.getByText("nidorine");
    const image = screen.getByRole("img", { name: "PokemonImage" });
    const power = screen.getByText("poison");
    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(image).toHaveAttribute("src", baseProps.url);
    expect(power).toBeInTheDocument();
  });

  it("no pokemon exist", () => {
    render(<Card pokemonData={undefined} error />);
    const errorText = screen.getByText("Pokemon doesn't exist");
    expect(errorText).toBeInTheDocument();
  });
});
