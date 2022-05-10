import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Pokedex from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={Pokedex} options={{ title: "", headerTransparent: true }} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} options={{ title: "Pokemon" }} />
        </Stack.Navigator>
    )
}