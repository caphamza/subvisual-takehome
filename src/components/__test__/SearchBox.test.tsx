import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchBox } from "components";

const setup = () => {
  render(<SearchBox search={() => {}} />);
  const input = screen.getByLabelText("pokemon-name-input");
  const button = screen.getByText("go");
  const user = userEvent.setup();
  return {
    input,
    button,
    user,
  };
};

describe("Pokemon search bar", () => {
  it("render input field", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  it("render button", () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
  });

  it("on button press clear the input field", async () => {
    const { button, input, user } = setup();
    await user.type(input, "Hello World");
    await user.click(button);
    expect(input).toHaveValue("");
  });
});
