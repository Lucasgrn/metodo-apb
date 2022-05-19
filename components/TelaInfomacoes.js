import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const TelaInformacoes = ({ navigation }) => {
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
      <View style={styles.bemvindo}>
        <ImageBackground
          source={require('../assets/images/informacoes.png')}
          style={styles.bemvindo__imagemProfessor}
        ></ImageBackground>
        <Text style={styles.bemvindo__header1}>Mestre Pajé</Text>
        <View style={styles.sobre}>
          <Text style={styles.sobre__header2}>Quem sou?</Text>
          <Text style={styles.sobre__paragrafo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown{' '}
          </Text>
          <Text style={styles.sobre__header2}>Estilo de Capoeira</Text>
          <Text style={styles.sobre__paragrafo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown{' '}
          </Text>
          <Text style={styles.sobre__header2}>Por que fazer o curso?</Text>
          <Text style={styles.sobre__paragrafo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown{' '}
          </Text>
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
  bemvindo: {
    alignItems: 'flex-start',
    marginTop: 62,
    marginLeft: 24,
    marginRight: 24,
  },
  bemvindo__imagemProfessor: {
    width: '100%',
    height: 230,
  },
  bemvindo__header1: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#0A0D36',
    fontSize: 20,
    marginTop: 35,
  },
  sobre: {
    marginTop: 25,
  },
  sobre__header2: {
    fontFamily: 'Montserrat_400Regular',
    color: '#000',
    fontSize: 15,
    marginTop: 15,
  },
  sobre__paragrafo: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 15,
    color: '#7A7A7A',
    marginTop: 8,
  },
});

export { TelaInformacoes };
