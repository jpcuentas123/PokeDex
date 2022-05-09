import { API_POKEMONS_URL } from "../utils/constants"

export const fetchPokemons = async ({ limit }) => {
    const result = await fetch(`${API_POKEMONS_URL}pokemon?limit=${limit}`).then(res => res.json()).then(res => res.results)
    return result
}

export const fetchPokemonsDetailsByUrl = async (url) => {
    const result = await fetch(url).then(res => res.json())
    return result
}