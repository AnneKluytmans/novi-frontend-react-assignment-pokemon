import axios from "axios";
import Button from "./components/button/Button.jsx";
import ErrorMessage from "./components/errorMessage/ErrorMessage.jsx";
import logo from "./assets/logo.png";
import "./App.css";
import {useEffect, useState} from "react";


function App() {
    const [pokemon, setPokemon] = useState({ results: [] });
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {

        async function getPokemon() {
            toggleError(false);
            toggleLoading(true);

            try {
                const response = await axios.get(endpoint);
                console.log(response.data);
                setPokemon(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }

        getPokemon();

    }, [endpoint]);


    return (
      <div className="poke-deck">
          <img src={logo} alt="pokemon logo" className="pokemon-logo"/>

          {pokemon.results.length > 0 ?
              <div>
                  <Button
                      type="button"
                      disabled={pokemon.previous === null}
                      clickHandler={() => setEndpoint(pokemon.previous)}
                      className="nav-button"
                      >
                      Previous
                  </Button>
                  <Button
                      type="button"
                      disabled={pokemon.next === null}
                      clickHandler={() => setEndpoint(pokemon.next)}
                      className="nav-button"
                  >
                      Next
                  </Button>
                  {pokemon.results.map((poke) => {
                      return (
                          <h2 key={poke.name}>{poke.name}</h2>
                      );
                  })}
              </div> : null }
          {loading && <h2>Loading...</h2>}
          {error && <ErrorMessage message="There was an issue fetching the data...🌩"/>}
      </div>
    );
}


export default App;
