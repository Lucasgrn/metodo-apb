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
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

MaterialIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const NavegadorApp = async ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  const ref = doc(db, 'users', route.params.user.uid)
  const data = await getDoc(ref)
  if (!fontsLoaded) {
    <AppLoading />;
  }

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
        //userName={data.data().name}
      />
      {console.log(data.data())}

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
