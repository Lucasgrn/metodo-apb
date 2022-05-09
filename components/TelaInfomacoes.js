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
});

export { TelaInformacoes };
