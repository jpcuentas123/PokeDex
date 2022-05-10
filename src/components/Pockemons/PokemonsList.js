import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

const PokemonsList = (props) => {
    const { pokemons } = props;
    return (
        <FlatList data={pokemons} numColumns={3} showsVerticalScrollIndicator={false} keyExtractor={(pokemon) => String(pokemon.id)} renderItem={({ item }) =>
            <PokemonCard pokemon={item} />
        } contentContainerStyle={styles.flatListContentContainer} />
    )
}

export default PokemonsList

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,

    }
})
