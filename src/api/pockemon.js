import { API_POCKEMONS_URL } from "../utils/constants"

export const fetchPokemons = async ({ limit }) => {
    const result = await fetch(`${API_POCKEMONS_URL}pokemon?limit=${limit}`).then(res => res.json()).then(res => res.results)
    return result
}

export const fetchPokemosDetailsByUrl = async (url) => {
    const result = await fetch(url).then(res => res.json())
    return result
}