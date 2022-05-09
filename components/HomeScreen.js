import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import modulosData from '../assets/data/modulosData';

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  const [number, onChangeNumber] = React.useState(null);

  const renderModulosItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemModulo}>
        <ImageBackground source={item.image} style={styles.itemImage}></ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.body}>
      <View style={styles.bemvindo}>
        <Text style={styles.header1}>Olá, Fulano</Text>
      </View>
      <View style={styles.modulosDataWrapper}>
        <FlatList
          data={modulosData}
          renderItem={renderModulosItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FAFCFE',
    flex: 1,
  },
  bemvindo: {
    alignItems: 'flex-start',
    marginTop: 120,
    marginLeft: 24,
  },
  header1: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#0A0D36',
    fontSize: 32,
  },
  modulosDataWrapper: {
    flex: 1,
  },
  itemModulo: {
    marginTop: 32,
    marginLeft: 20,
  },
  itemImage: {
    width: 234,
    height: 354,
  },
});

export { HomeScreen };
