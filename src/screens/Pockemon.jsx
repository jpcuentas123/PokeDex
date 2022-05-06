import { View, Text } from 'react-native';
import React from 'react';

export default function PockemonScreen({ route }) {
  const { name } = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
