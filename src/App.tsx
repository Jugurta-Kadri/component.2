import "./App.css";
import PokemonCard from "./components/pokemoncard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
		imgSrc: undefined,
	},
];

function App() {
	const pokemon = pokemonList[0];

	return <PokemonCard pokemon={pokemon} />;
}

export default App;
