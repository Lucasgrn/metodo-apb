import * as React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

const windowWidth = Dimensions.get('window').width;
const videoWidth = windowWidth * 0.8;
const videoHeight = videoWidth * 0.5625;
const imageHeight = windowWidth * 1.07;
const windowHeight = Dimensions.get('window').height;

MaterialIcons.loadFont();

const Capoeira = ({ navigation }) => {

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <View style={styles.body}>
      <View>
      <YoutubePlayer
      width={videoWidth}
        height={videoHeight}
        play={true}
        videoId={"erInHkjxkL8"}
      />
      </View>
      <Text>Mds</Text>
    </View>
  )}

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#FAFCFE',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },})

    export {Capoeira}