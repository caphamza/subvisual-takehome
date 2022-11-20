import LeftArrowIcon from "assets/icons/leftArrow.png";
import RightArrowIcon from "assets/icons/rightArrow.png";
import { SearchBox, Card } from "components";
import useHome from "pages/home/useHome";

const Home = () => {
  const { pokemonData, getPokemon, getPreviousPokemon, getNextPokemon, error } =
    useHome();

  return (
    <div className="pokeman-app">
      <div className="pokeman-app-container">
        <div style={{ marginBottom: "30px" }}>
          <SearchBox search={getPokemon} />
        </div>
        <div className="card-container">
          <div
            onClick={getPreviousPokemon}
            role="button"
            onKeyDown={getPreviousPokemon}
            tabIndex={0}
          >
            <img
              className={`left-arrow-img ${!pokemonData && "hidden"}`}
              alt="leftArrow"
              src={LeftArrowIcon}
            />
          </div>
          <Card pokemonData={pokemonData} error={error} />
          <div
            onClick={getNextPokemon}
            onKeyDown={getNextPokemon}
            role="button"
            tabIndex={0}
          >
            <img
              className={`right-arrow-img ${!pokemonData && "hidden"}`}
              alt="rightArrow"
              src={RightArrowIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
