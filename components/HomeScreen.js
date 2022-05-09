import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const HomeScreen = ({ navigation }) => {
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
        <Text style={styles.header1}>Olá, Fulano</Text>
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
});

export { HomeScreen };
