import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import modulosData from "../assets/data/modulosData";
import { Dimensions } from "react-native";
import { StatusBar } from "react-native";

const statusBarHeight =
  Platform.OS === "ios" ? 0 : ("statusBarHeight: ", StatusBar.currentHeight);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  const [number, onChangeNumber] = React.useState(null);

  const renderModulosItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.modulosDataWrapper__itemModulo}
        onPress={() =>
          navigation.navigate("TelaTreino", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={styles.modulosDataWrapper__itemImage}
        >
          <Text style={styles.testando}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.body}>
      <View style={styles.bemvindo}>
        <Text style={styles.bemvindo__header1}>Olá, Fulano</Text>
      </View>
      <View style={styles.modulosDataWrapper}>
        <FlatList
          data={modulosData}
          renderItem={renderModulosItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          overScrollMode={"never"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAFCFE",
    flex: 1,
  },
  bemvindo: {
    alignItems: "flex-start",
    marginTop: statusBarHeight + windowHeight * 0.05,
    marginLeft: 24,
  },
  bemvindo__header1: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#0A0D36",
    fontSize: 32,
  },
  modulosDataWrapper: {
    flex: 1,
  },
  modulosDataWrapper__itemModulo: {
    marginTop: windowHeight * 0.032,
    marginLeft: 20,
  },
  modulosDataWrapper__itemImage: {
    width: 234,
    height: 354,
  },
  testando: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    fontSize: 32,
  },
});

export { HomeScreen };
