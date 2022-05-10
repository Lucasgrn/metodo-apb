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

const TelaPerfil = ({ navigation }) => {
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
      <View style={styles.perfilWrapper}>
        <View style={styles.bannerWrapper}></View>
        <Text style={styles.header1}>Fulano de tal</Text>
      </View>
      <View style={styles.treinosWrapper}>
        <Text>Ultimo treino</Text>
        <View style={styles.ultimoTreinoWrapper}>
          <View>
            <MaterialIcons name="play-circle-fill" size={35} color={'#0A0D36'} />
          </View>
          <View>
            <Text>Treino de ginga</Text>
            <Text>Nessa aula você vai aprender o movimento de ginga</Text>
          </View>
        </View>
        <Text>Treino Finalizado</Text>
        <View style={styles.finalizadoTreinoWrapper}>
          <MaterialIcons name="play-circle-fill" size={35} color={'#0A0D36'} />
          <View>
            <Text>Treino de Benção</Text>
            <Text>Nessa aula você vai aprender o movimento de ginga</Text>
          </View>
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
  perfilWrapper: {
    alignItems: 'center',
  },
  bannerWrapper: {
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 155,
    width: '100%',
  },
  header1: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#262626',
    fontSize: 24,
    marginTop: 60,
  },
  treinosWrapper: {
    alignItems: 'center',
    height: 120,
    marginTop: 45,
  },
  ultimoTreinoWrapper: {
    backgroundColor: '#3cff42',
    borderRadius: 25,
    flexDirection: 'row',
    height: 100,
    width: '80%',
    padding: 20,
    marginTop: 20,
    marginBottom: 45,
  },
  finalizadoTreinoWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    flexDirection: 'row',
    height: 100,

    width: '80%',
    padding: 20,
    marginTop: 20,
  },
});

export { TelaPerfil };
