// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaLogin } from './components/TelaLogin';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name="TelaDois" component={TelaDois} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TelaDois = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello world dois</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('TelaDois')} />
    </View>
  );
};

export default App;
