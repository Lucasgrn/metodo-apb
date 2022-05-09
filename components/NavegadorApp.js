import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from './HomeScreen';
import { TelaInformacoes } from './TelaInfomacoes';
import { TelaPerfil } from './TelaPerfi';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const NavegadorApp = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.body}>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="TelaInformacoes" component={TelaInformacoes} />
        <Tab.Screen name="TelaPerfil" component={TelaPerfil} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FAFCFE',
    flex: 1,
  },
});

export { NavegadorApp };
