import PokemonSearchImg from "assets/images/pokemonSearch.svg";

import { PokemonData } from "types";

type Props = {
  pokemonData: PokemonData | undefined;
  error: boolean;
};

const Card = ({ pokemonData, error }: Props) => {
  return (
    <div className={`pokemon-card ${!!pokemonData && "flip"}`}>
      <div className="pokemon-card-content">
        <div className="card-front">
          <img key="pokemon" alt="PokemonImage" src={pokemonData?.url} />
          <div aria-label="pokemon-id" className="id-container">
            <p>#{pokemonData?.id}</p>
          </div>
          <p className="pokemon-name">{pokemonData?.name}</p>
          <p className="pokemon-power">{pokemonData?.power}</p>
        </div>
        <div className={`card-back ${error && "card-back-error"}`}>
          <img
            key="searcPokemon"
            alt="PokemonSearchImage"
            src={PokemonSearchImg}
          />
          {error && (
            <p className="card-back-error-msg">Pokemon doesn&apos;t exist</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
