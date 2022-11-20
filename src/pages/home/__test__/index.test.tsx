import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Home } from "pages";

const setup = () => {
  render(<Home />);
  const input = screen.getByLabelText("pokemon-name-input");
  const button = screen.getByText("go");
  const user = userEvent.setup();
  return {
    input,
    button,
    user,
  };
};

describe("Render Pokemon App", () => {
  it("pokemon by Id", async () => {
    const { input, button, user } = setup();
    await user.type(input, "1");
    await user.click(button);
    const id = await screen.findByText("#1");
    expect(id).toBeInTheDocument();
  });

  it("pokemon by Name", async () => {
    const { input, button, user } = setup();
    await user.type(input, "nidorine");
    await user.click(button);
    const id = await screen.findByText("nidorine");
    expect(id).toBeInTheDocument();
  });

  it("pokemon doesn't exist", async () => {
    const { input, button, user } = setup();
    await user.type(input, "xyz");
    await user.click(button);
    const id = await screen.findByText("Pokemon doesn't exist");
    expect(id).toBeInTheDocument();
  });
});
