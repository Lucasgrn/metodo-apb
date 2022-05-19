import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { StatusBar } from "react-native";

const statusBarHeight =
  Platform.OS === "ios" ? 0 : ("statusBarHeight: ", StatusBar.currentHeight);

const windowWidth = Dimensions.get("window").width;
const videoWidth = windowWidth;
const videoHeight = videoWidth * 0.5625;
const imageHeight = windowWidth * 1.07;
const windowHeight = Dimensions.get("window").height;

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
        <View style={styles.video__youtubeplayer}>
          <YoutubePlayer
            width={videoWidth}
            height={videoHeight}
            play={true}
            videoId={"erInHkjxkL8"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAFCFE",
    flex: 1,
    alignItems: "center",
    marginTop: statusBarHeight,
  },
  video__iconeVoltar: {
    marginLeft: 25,
    marginTop: 20,
    marginBottom: -55,
  },
});

export { Capoeira };
