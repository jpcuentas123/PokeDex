import React from 'react'
import { fetchPokemons, fetchPokemonsDetailsByUrl } from '../api/pokemon'
import PokemonsList from '../components/Pockemons/PokemonsList'
import { SafeAreaView } from 'react-native-safe-area-context'


// enum LoadState {
//     IDLE = "IDLE",
//     LOADING = "LOADING",
//     LOADED = "LOADED",
//     ERROR = "ERROR",
// }

// const initialState = {
//     state: LoadState.IDLE,
// };

// function reducer({ state }) {
//     switch (state) {
//         case LoadState.IDLE:
//             return { state: "LOADING" };
//         case LoadState.LOADING:
//             return { state: "LOADED" };
//         default:
//             return { state };
//     }
// }

export default function Pokedex() {
    const [pokemons, setPokemons] = React.useState([])
    // const [state, dispatch] = React.useReducer(reducer, initialState);

    const loadPokemons = async () => {
        try {
            const pokemonList = await fetchPokemons({ limit: 10 })
            const pokemonDetails = await Promise.all(pokemonList.map(async (pokemon) => {
                const details = await fetchPokemonsDetailsByUrl(pokemon.url)
                return {
                    id: details.id,
                    name: details.name,
                    types: details.types.map(type => type.type.name),
                    order: details.order,
                    base_experience: details.base_experience,
                    image: details.sprites.other['official-artwork'].front_default
                }
            }))
            return pokemonDetails;

        } catch (error) {
            return error;
        }
    }

    React.useEffect(() => {
        (async () => {
            const result = await loadPokemons();
            setPokemons(result)
        })()

    }, [])
    // if (state.state === LoadState.LOADING || state.state === LoadState.IDLE) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //             <Text>Loading...</Text>
    //         </View>
    //     )
    // }

    // if (state.state === LoadState.ERROR) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //             <Text>Error</Text>
    //         </View>
    //     )
    // }

    return (
        <SafeAreaView>
            <PokemonsList pokemons={pokemons} />
        </SafeAreaView>
    )
}