import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
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
        <Text style={styles.header1}>INFO!</Text>
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
    alignItems: 'center',
    marginTop: 120,
  },
  header1: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#262626',
    fontSize: 24,
    marginTop: 50,
  },
  inputArea: {
    marginTop: 116,
    alignItems: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: '#F4F4F4',
    height: 52,
    width: '80%',
    borderRadius: 10,
    padding: 10,
  },
  inputDois: {
    backgroundColor: '#F4F4F4',
    height: 52,
    width: '80%',
    marginTop: 33,
    borderRadius: 10,
    padding: 10,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 34,
    width: '100%',
  },
  entrar: {
    backgroundColor: '#0A0D36',
    borderColor: '#0A0D36',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    paddingVertical: 16,
    width: '80%',
  },
  entrarText: {
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 28,
    fontSize: 16,
    textAlign: 'center',
  },
  cadastrar: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#0A0D36',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    maxHeight: 60,
    marginTop: 20,
    paddingVertical: 16,
    width: '80%',
  },
  cadastrarText: {
    color: '#0A0D36',
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 28,
    fontSize: 16,
    textAlign: 'center',
  },
  esqueceuSenha: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 18,
    fontSize: 12,
    marginTop: 20,
  },
});

export { TelaInformacoes };
