import { useState, FormEvent } from "react";

type Props = {
  search: (v: string) => void;
};

const SearchBox = ({ search }: Props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      search(input);
      setInput("");
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <input
          aria-label="pokemon-name-input"
          className="searchBox-input"
          placeholder="Pokemon"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="searchBox-button">
          go
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
