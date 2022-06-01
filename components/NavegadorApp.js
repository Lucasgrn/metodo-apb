import * as React from "react";
import { StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { TelaInformacoes } from "./TelaInfomacoes";
import { TelaPerfil } from "./TelaPerfi";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { db } from '../config/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

MaterialIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const NavegadorApp = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }
  let data = route.params.data

  return (
    <Tab.Navigator
      activeColor="#0A0D36"
      inactiveColor="#b6b8d4"
      barStyle={styles.navbar__tabBar}
      labeled={false}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
        userName={data.name}
      />
      <Tab.Screen
        name="info"
        component={TelaInformacoes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TelaPerfil"
        component={TelaPerfil}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navbar__tabBar: {
    backgroundColor: "#fff",
  },
});

export { NavegadorApp };
