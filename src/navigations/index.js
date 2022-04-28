import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Account from '../screens/Account';
import Favorite from '../screens/Favorite';
import Pokedex from '../screens/Pokedex';
import pockedexLogo from '../../assets/pockedexlogo.png';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {

    const ScreensList = {
        Home: { focused: "auto-awesome-mosaic", normal: "auto-awesome-mosaic" },
        Favorite: { focused: "auto-awesome", normal: "auto-awesome" },
        Account: { focused: 'account-circle', normal: 'account-circle' },
        Pokedex: { focused: 'blur-circular', normal: 'blur-circular' }
    }

    const getTabBarIcon = (name, focused, size, color) => {
        let iconName;

        if (ScreensList.hasOwnProperty(name)) {
            iconName = focused
                ? ScreensList[`${name}`].focused
                : ScreensList[`${name}`].normal;
        }

        if (name === 'Pokedex') {
            return <Image source={pockedexLogo} style={{ width: size, height: size }} />
        }
        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={focused ? "#2962ff" : "#263238"} />;
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, size, color),
            })}
            tabBarOptions={{
                activeTintColor: '#2962ff',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={Home} options={{}} />
            <Tab.Screen name="Pokedex" component={Pokedex} options={{}} />
            <Tab.Screen name="Favorite" component={Favorite} options={{}} />
            <Tab.Screen name="Account" component={Account} options={{}} />
        </Tab.Navigator>
    )
}