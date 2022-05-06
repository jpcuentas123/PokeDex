import { Button, ScrollView } from 'react-native'
import React from 'react'
import { fetchPokemons, fetchPokemosDetailsByUrl } from '../api/pockemon'


// enum LoadState {
//     IDLE = "IDLE",
//     LOADING = "LOADING",
//     LOADED = "LOADED",
//     ERROR = "ERROR",
// }

// const initialSatate = {
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

export default function Pockedex({ navigation }) {
    const [pockemons, setPockemons] = React.useState([])
    // const [state, dispatch] = React.useReducer(reducer, initialSatate);

    const loadPockemons = async () => {
        try {
            const pockemonList = await fetchPokemons({ limit: 10 })
            const pockemonDetails = await Promise.all(pockemonList.map(async (pockemon) => {
                const details = await fetchPokemosDetailsByUrl(pockemon.url)
                return {
                    id: details.id,
                    name: details.name,
                    types: details.types.map(type => type.type.name),
                    order: details.order,
                    base_experience: details.base_experience,
                    image: details.sprites.other['official-artwork'].front_default
                }
            }))
            return pockemonDetails;

        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        (async () => {
            const result = await loadPockemons();
            setPockemons(result)
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
        <ScrollView>
            {pockemons.map(pockemon => (
                <Button key={pockemon.name} title={`Name: ${pockemon.name} - XP: ${pockemon.base_experience}`} onPress={() => navigation.navigate('Pockemon', { name: pockemon.name })} />
            ))}
        </ScrollView>
    )
}