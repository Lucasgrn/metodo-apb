import * as React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import perfilData from "../assets/data/perfilData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const imageHeight = windowWidth * 1.07;
const windowHeight = Dimensions.get("window").height;

MaterialIcons.loadFont();

const TelaTreino = ({ route, navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  const { item } = route.params;

  return (
    <View style={styles.body}>
      <ImageBackground source={item.imageBig} style={styles.treinoBackground}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={35}
            color={"#fff"}
            style={styles.treinoBackground__iconeVoltar}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.videosWrapper}>
        <View style={styles.detalhes}>
          <View style={styles.detalhes__textos}>
            <Text style={styles.textos_header1}>Módulo </Text>
            <Text style={styles.textos_header2}>Treino</Text>
          </View>
          <View style={styles.detalhes__infos}>
            <View style={styles.detalhes__tempoTreino}>
              <MaterialIcons name="timer" size={18} color={"#0A0D36"} />
              <Text>2 Horas</Text>
            </View>
            {/* <View style={styles.detalhes__caloriasTreino}>
              <MaterialIcons
                name="local-fire-department"
                size={18}
                color={"#0A0D36"}
              />
              <Text>15000 Kcl</Text>
            </View> */}
          </View>
        </View>

        {/* schoollView */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          overScrollMode={"never"}
        >
          <TouchableOpacity
            style={styles.scrollView__elementoAula}
            onPress={() => navigation.navigate("Capoeira")}
          >
            <MaterialIcons name="play-circle-fill" size={35} color={"#000"} />
            <View style={styles.elementoAula__textos}>
              <Text style={styles.elementoAula__header1}>{item.title} 1</Text>
              <Text style={styles.elementoAula__header2}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.scrollView__elementoAula}
            onPress={() => navigation.navigate("Capoeira")}
          >
            <MaterialIcons name="play-circle-fill" size={35} color={"#000"} />
            <View style={styles.elementoAula__textos}>
              <Text style={styles.elementoAula__header1}>{item.title} 2</Text>
              <Text style={styles.elementoAula__header2}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAFCFE",
    flex: 1,
  },
  treinoBackground: {
    width: windowWidth,
    height: imageHeight,
  },
  treinoBackground__iconeVoltar: {
    marginLeft: 25,
    marginTop: 60,
  },
  videosWrapper: {
    backgroundColor: "#fff",
    width: windowWidth,
    height: "100%",
    marginTop: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  aulasWrapper: {
    width: windowWidth,
    height: 80,
  },
  detalhes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 55,
    alignItems: "center",
  },
  detalhes__textos: {
    marginLeft: 24,
  },
  textos_header1: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },
  textos_header2: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
  detalhes__infos: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  detalhes__tempoTreino: {
    alignItems: "center",
    borderColor: "#D7D7D7",
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 7.5,
    marginRight: 10,
  },
  detalhes__caloriasTreino: {
    alignItems: "center",
    borderColor: "#D7D7D7",
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 7.5,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginTop: windowHeight * 0.02,
    marginBottom: 365,
  },
  scrollView__elementoAula: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: windowHeight * 0.02,
    marginHorizontal: 24,
  },
  elementoAula__textos: {
    marginLeft: 10,
    width: 200,
  },
  elementoAula__header1: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
  },
  elementoAula__header2: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
});

export { TelaTreino };
