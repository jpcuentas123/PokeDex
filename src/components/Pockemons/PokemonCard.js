import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

const PokemonCard = (props) => {
    const { pokemon } = props;
    const goToPokemon = () => {
        return;
    }
    const color = getColorByPokemonType(pokemon.types[0]);
    const bgStyle = { ...styles.touchableBoxStyle, backgroundColor: color }
    return (
        <TouchableWithoutFeedback onPress={goToPokemon} style={bgStyle}>
            <Image source={{ uri: pokemon.image }} style={styles.imageStyle} />
            <Text style={styles.textStyle}>{pokemon.name}</Text>
        </TouchableWithoutFeedback>
    )
}

export default PokemonCard

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    touchableBoxStyle: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageStyle: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
    // eslint-disable-next-line react-native/no-color-literals
    textStyle: {
        fontSize: 12,
        paddingBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        textTransform: 'capitalize',
    }
})