import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import perfilData from "../assets/data/perfilData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";
import { StatusBar } from "react-native";

const statusBarHeight =
  Platform.OS === "ios" ? 0 : ("statusBarHeight: ", StatusBar.currentHeight);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
        <View style={styles.perfilWrapper__banner}></View>
        <Text style={styles.perfilWrapper__header1}>Fulano de tal</Text>
      </View>
      <View style={styles.treinosWrapper}>
        {/* Ultimo treinado */}
        <Text style={styles.treinosWrapper__header2}>Ultimo treino</Text>
        <View style={styles.treinoWrapper}>
          <MaterialIcons
            name="play-circle-fill"
            size={35}
            color={"#0A0D36"}
            style={styles.treinoWrapper__iconeTreino}
          />
          <View>
            <Text style={styles.treinoWrapper__tituloTreino}>
              Treino de ginga
            </Text>
            <Text style={styles.treinoWrapper__detalhesTreino}>
              Nessa aula você vai aprender o movimento de ginga
            </Text>
          </View>
        </View>
        {/* Treino finalizado */}
        <Text style={styles.treinosWrapper__header2}>Treino Finalizado</Text>
        <View style={styles.treinoWrapper}>
          <MaterialIcons
            name="play-circle-fill"
            size={35}
            color={"#0A0D36"}
            style={styles.treinoWrapper__iconeTreino}
          />
          <View>
            <Text style={styles.treinoWrapper__tituloTreino}>
              Treino de Benção
            </Text>
            <Text style={styles.treinoWrapper__detalhesTreino}>
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
    backgroundColor: "#FAFCFE",
    flex: 1,
  },
  perfilWrapper: {
    alignItems: "center",
  },
  perfilWrapper__banner: {
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 155,
    width: "100%",
  },
  perfilWrapper__header1: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#262626",
    fontSize: 24,
    marginTop: windowHeight * 0.07,
  },
  treinosWrapper__header2: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#262626",
    fontSize: 16,
  },
  treinosWrapper: {
    alignItems: "center",
    height: 120,
    marginTop: windowHeight * 0.05,
  },
  treinoWrapper: {
    backgroundColor: "#FFF",
    borderRadius: 25,
    flexDirection: "row",
    height: 100,
    width: "90%",
    padding: 20,
    marginTop: windowHeight * 0.025,
    marginBottom: 45,
    marginHorizontal: 35,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#D7D7D7",
  },
  treinoWrapper__iconeTreino: {
    marginRight: 20,
  },
  treinoWrapper__tituloTreino: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#262626",
    fontSize: 14,
    lineHeight: 18,
    width: "80%",
    marginBottom: 3,
  },
  treinoWrapper__detalhesTreino: {
    fontFamily: "Montserrat_400Regular",
    color: "#262626",
    fontSize: 14,
    lineHeight: 18,
    width: "80%",
  },
});

export { TelaPerfil };
