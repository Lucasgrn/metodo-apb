import * as React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, FlatList } from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import perfilData from '../assets/data/perfilData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const imageHeight = windowWidth * 1.07;
const windowHeight = Dimensions.get('window').height;

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
    <View style={styles.body}>
      <ImageBackground source={item.imageBig} style={styles.treinoBackground}>
        <TouchableOpacity onPress={() => navigation.navigate('NavegadorApp')}>
          <MaterialIcons
            name="arrow-back-ios"
            size={35}
            color={'#fff'}
            style={styles.treinoBackground__iconeVoltar}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.videosWrapper}>
        <View style={styles.detalhes}>
          <View style={styles.detalhes__textos}>
            <Text>Módulo </Text>
            <Text>Treino</Text>
          </View>
          <View style={styles.detalhes__infos}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FAFCFE',
    flex: 1,
  },
  treinoBackground: {
    width: windowWidth,
    height: imageHeight,
  },
  treinoBackground__iconeVoltar: {
    marginLeft: 25,
    marginTop: 60,
  },
  videosWrapper: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: '100%',
    marginTop: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  aulasWrapper: {
    width: windowWidth,
    height: 80,
  },
});

export { TelaTreino };
