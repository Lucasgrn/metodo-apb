import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
const statusBarHeight =
  Platform.OS === "ios" ? 0 : ("statusBarHeight: ", StatusBar.currentHeight);
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const TelaLogin = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  const [Email, onChangeEmail] = React.useState(null);
  const [Senha, onChangeSenha] = React.useState(null);
  const [Erro, onChangeErro] = React.useState(null);

  const login = () => {
    signInWithEmailAndPassword(auth, Email, Senha)
      .then((userCredential) => {
        onChangeErro(null);
        const user = userCredential.user;
        navigation.navigate("NavegadorApp");
      })
      .catch((error) => {
        if (error.code == "auth/missing-email") {
          onChangeErro("Email vazio");
        } else if (error.code == "auth/wrong-password") {
          onChangeErro("Senha incorreta");
        } else if (error.code == "auth/user-not-found") {
          onChangeErro("Email não cadastrado");
        }
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.body}>
          <View>
            <View style={styles.bemvindo}>
              <ImageBackground
                source={require("../assets/images/logo.png")}
                style={styles.logo}
              />
            </View>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.inputArea__login}
                onChangeText={onChangeEmail}
                value={Email}
                placeholder="Email"
              />
              <TextInput
                style={styles.inputArea__senha}
                onChangeText={onChangeSenha}
                value={Senha}
                placeholder="Senha"
                secureTextEntry
              />
              {Erro == null ? (
                console.log("")
              ) : (
                <Text style={styles.inputArea__MensagemErro}>{Erro}</Text>
              )}
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.buttons__entrar} onPress={login}>
                <Text style={styles.buttons__entrarText}>entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons__cadastrar}
                onPress={() => navigation.navigate("TelaDeCadastro")}
              >
                <Text style={styles.buttons__cadastrarText}>cadastrar-se</Text>
              </TouchableOpacity>
              <Text style={styles.buttons__esqueceuSenha}>
                Esqueceu sua senha? Toque aqui para recuperar.
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: "#FAFCFE",
    flex: 1,
    justifyContent: "space-around",
  },
  bemvindo: {
    alignItems: "center",
    marginTop: statusBarHeight,
  },
  logo: {
    width: 169,
    height: 169,
  },
  inputArea: {
    marginTop: "15%",
    alignItems: "center",
    width: "100%",
  },
  inputArea__login: {
    backgroundColor: "#F4F4F4",
    height: 52,
    width: "80%",
    borderRadius: 10,
    padding: 10,
  },
  inputArea__senha: {
    backgroundColor: "#F4F4F4",
    height: 52,
    width: "80%",
    marginTop: "5%",
    borderRadius: 10,
    padding: 10,
  },
  inputArea__MensagemErro: {
    fontFamily: "Montserrat_400Regular",
    color: "#f00",
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    marginTop: "5%",
    width: "100%",
  },
  buttons__entrar: {
    backgroundColor: "#0A0D36",
    borderColor: "#0A0D36",
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    paddingVertical: 16,
    width: "80%",
  },
  buttons__entrarText: {
    color: "#fff",
    fontFamily: "Montserrat_400Regular",
    lineHeight: 28,
    fontSize: 16,
    textAlign: "center",
  },
  buttons__cadastrar: {
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "#0A0D36",
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    maxHeight: 60,
    marginTop: "5%",
    paddingVertical: 16,
    width: "80%",
  },
  buttons__cadastrarText: {
    color: "#0A0D36",
    fontFamily: "Montserrat_400Regular",
    lineHeight: 28,
    fontSize: 16,
    textAlign: "center",
  },
  buttons__esqueceuSenha: {
    fontFamily: "Montserrat_400Regular",
    lineHeight: 18,
    fontSize: 12,
    marginTop: "5%",
  },
});

export { TelaLogin };
