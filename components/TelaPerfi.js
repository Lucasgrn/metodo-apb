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
        <Text style={styles.header2}>Ultimo treino</Text>
        <View style={styles.treinoWrapper}>
          <MaterialIcons
            name="play-circle-fill"
            size={35}
            color={'#0A0D36'}
            style={styles.iconeTreino}
          />
          <View style={styles.textosTreino}>
            <Text style={styles.tituloTreino}>Treino de ginga</Text>
            <Text style={styles.detalhesTreino}>
              Nessa aula você vai aprender o movimento de ginga
            </Text>
          </View>
        </View>
        <Text style={styles.header2}>Treino Finalizado</Text>
        <View style={styles.treinoWrapper}>
          <MaterialIcons
            name="play-circle-fill"
            size={35}
            color={'#0A0D36'}
            style={styles.iconeTreino}
          />
          <View>
            <Text style={styles.tituloTreino}>Treino de Benção</Text>
            <Text style={styles.detalhesTreino}>
              Nessa aula você vai aprender o movimento de ginga
            </Text>
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
  header2: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#262626',
    fontSize: 16,
  },
  treinosWrapper: {
    alignItems: 'center',
    height: 120,
    marginTop: 45,
  },
  treinoWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    flexDirection: 'row',
    height: 100,
    width: '90%',
    padding: 20,
    marginTop: 20,
    marginBottom: 45,
    marginHorizontal: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D7D7D7',
  },
  iconeTreino: {
    marginRight: 20,
  },
  tituloTreino: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#262626',
    fontSize: 14,
    lineHeight: 18,
    width: '80%',
  },
  detalhesTreino: {
    fontFamily: 'Montserrat_400Regular',
    color: '#262626',
    fontSize: 14,
    lineHeight: 18,
    width: '80%',
  },
});

export { TelaPerfil };
