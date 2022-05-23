import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { auth } from '../config/firebase'

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

  const login = () => {
    signInWithEmailAndPassword(auth, Email, Senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("NavegadorApp");
      })

  }

  return (
    <View style={styles.body}>
      <View style={styles.bemvindo}>
        <Text style={styles.bemvindo__header1}>Seja bem vindo(a)!</Text>
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
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttons__entrar}
          onPress={() => {
            login
          }}
        >
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
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAFCFE",
    flex: 1,
  },
  bemvindo: {
    alignItems: "center",
    marginTop: 120,
  },
  bemvindo__header1: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#262626",
    fontSize: 24,
    marginTop: 50,
  },
  inputArea: {
    marginTop: 116,
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
    marginTop: 33,
    borderRadius: 10,
    padding: 10,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    marginTop: 34,
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
    marginTop: 20,
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
    marginTop: 20,
  },
});

export { TelaLogin };
