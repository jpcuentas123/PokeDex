import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorite from '../screens/Favorite';
import Account from '../screens/Account';
import Pockedex from '../screens/Pokedex';
import PockemonScreen from '../screens/Pockemon';

const Stack = createStackNavigator();

export default function PockedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pockedex" component={Pockedex} options={{ title: "Pockedex" }} />
            <Stack.Screen name="Pockemon" component={PockemonScreen} options={{ title: "Pockemon" }} />
        </Stack.Navigator>
    )
}