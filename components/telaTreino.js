import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import perfilData from '../assets/data/perfilData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();

const TelaTreino = ({ route, navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  const { item } = route.params;
  return (
    <View style={styles.migas}>
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  migas: {
    flex: 1,
  },
});

export { TelaTreino };
