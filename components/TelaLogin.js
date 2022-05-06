import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const TelaLogin = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <View style={styles.body}>
      <View style={styles.carrossel}>
        {/* <Image style={styles.logo} source={require('../assets/img/unnamed.png')} /> */}
        <Text style={styles.header1}>Lorem Ipsum</Text>
        <Text style={styles.header2}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cadastrar} onPress={() => navigation.navigate('TelaDois')}>
          <Text style={styles.cadastrarText}>cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.entrar} onPress={() => navigation.navigate('TelaDois')}>
          <Text style={styles.entrarText}>entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  carrossel: {
    alignItems: 'center',
    flex: 1,
    marginTop: 190,
  },
  logo: {
    height: 250,
    width: 250,
  },
  header1: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    marginTop: 50,
  },
  header2: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 40,
    textAlign: 'center',
    width: 250,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
    width: '100%',
  },
  cadastrar: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 45,
    paddingVertical: 10,
    width: '45%',
  },
  cadastrarText: {
    color: '#000',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  entrar: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 8,
    paddingHorizontal: 45,
    paddingVertical: 10,
    width: '45%',
  },
  entrarText: {
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});

export { TelaLogin };
