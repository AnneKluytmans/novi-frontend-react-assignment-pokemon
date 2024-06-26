import './PokemonCard.css'
import {useEffect, useState} from "react";
import axios from "axios";
import ErrorMessage from "../errorMessage/ErrorMessage.jsx";

const PokemonCard = ({ endpoint }) => {
    const [poke, setPoke] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {

        async function getPoke() {
            toggleError(false);
            toggleLoading(true);

            try {
                const response = await axios.get(endpoint);
                console.log(response.data);
                setPoke(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }

        if (endpoint) {
            getPoke();
        }

    }, []);

    return (
        <article className="poke-card">
            {Object.keys(poke).length > 0 ?
                <>
                    <h2>{poke.name}</h2>
                    <img
                        alt="Afbeelding pokémon"
                        src={poke.sprites.front_default}
                    />
                    <p><strong>Moves: </strong>{poke.moves.length}</p>
                    <p><strong>Weight: </strong>{poke.weight}</p>
                    <p><strong>Abilities: </strong></p>
                    <ul>
                        {poke.abilities.map((ability) => {
                            return (
                                <li key={`${ability.ability.name}-${poke.name}`}>
                                    {ability.ability.name}
                                </li>
                            )
                        })}
                    </ul>
                </> : null }
            {loading && <h2>Loading...</h2>}
            {error && <ErrorMessage message="There was an issue fetching the pokemon...🌩"/>}
        </article>
    );
}

export default PokemonCard;