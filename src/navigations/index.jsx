import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import pokedexLogo from '../../assets/pokeball.png';
import FavoritesNavigation from './FavoritesNavigation';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  const ScreensList = {
    Home: { focused: 'auto-awesome-mosaic', normal: 'auto-awesome-mosaic' },
    Favorite: { focused: 'auto-awesome', normal: 'auto-awesome' },
    Account: { focused: 'account-circle', normal: 'account-circle' },
    Pokedex: { focused: 'blur-circular', normal: 'blur-circular' },
  };

  const getTabBarIcon = (name, focused, size, color) => {
    let iconName;

    // eslint-disable-next-line no-prototype-builtins
    if (ScreensList.hasOwnProperty(name)) {
      iconName = focused
        ? ScreensList[`${name}`].focused
        : ScreensList[`${name}`].normal;
    }

    if (name === 'Pokedex') {
      return (
        <Image
          source={pokedexLogo}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: size * 3, height: size * 3, top: -15 }}
        />
      );
    }
    // You can return any component that you like here!
    return (
      <Icon name={iconName} size={size} color={focused ? color : '#263238'} />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name, focused, size, color),
      })}
      tabBarOptions={{
        activeTintColor: '#2962ff',
        inactiveTintColor: '#263238',
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={FavoritesNavigation}
        options={{}}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{ tabBarLabel: '' }}
      />
      <Tab.Screen name="Account" component={AccountNavigation} options={{}} />
    </Tab.Navigator>
  );
}
