import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { StatusBar } from "react-native";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;
const statusBarHeight =
  Platform.OS === "ios" ? 0 : ("statusBarHeight: ", StatusBar.currentHeight);
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const TelaDeCadastro = ({ navigation }) => {
  const [Nome, onChangeNome] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Senha, onChangeSenha] = React.useState(null);
  const [SenhaDois, onChangeSenhaDois] = React.useState(null);
  const [Genero, onChangeGenero] = React.useState(null);
  const [Erro, onChangeErro] = React.useState(null);
  const [regexSenha, onChangeregexSenha] = React.useState(null);

  // validar senha
  validateSenha = (valorSenha) => {
    let re =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return re.test(valorSenha);
  };

  const cadastro = () => {
    createUserWithEmailAndPassword(auth, Email, Senha)
      .then((userCredential) => {
        onChangeErro(null);
        const user = userCredential.user;
        navigation.navigate("NavegadorApp", { idUser: user.uid });
      })
      .catch((error) => {
        if (error.code == "auth/missing-email") {
          onChangeErro("Email vazio");
        } else if (error.code == "auth/email-already-in-use") {
          onChangeErro("Email já em uso");
        } else if (error.code == "auth/invalid-email") {
          onChangeErro("Email Invalido");
        }
      });
  };

  // date time picker
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);
  const [dataDeNascimento, setdataDeNascimento] =
    React.useState("Data De Nascimento");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setdataDeNascimento(fDate);
  };

  let estiloDataDeNascimento = dataDeNascimento;
  estiloDataDeNascimento === "Data De Nascimento"
    ? (estiloDataDeNascimento = styles.inputArea__teste1)
    : (estiloDataDeNascimento = styles.inputArea__teste2);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.body}>
          <View style={styles.inputArea}>
            <Text style={styles.inputArea__header1}>Cadastre-se</Text>
            <TextInput
              style={styles.inputArea__Textinput}
              onChangeText={onChangeEmail}
              value={Email}
              placeholder="Email"
              placeholderTextColor={"#7A7A7A"}
            />
            {Erro == null ? (
              console.log("")
            ) : (
              <Text style={styles.inputArea__MensagemErro}>{Erro}</Text>
            )}
            <TextInput
              style={styles.inputArea__Textinput}
              onChangeText={onChangeNome}
              value={Nome}
              placeholder="Nome"
              placeholderTextColor={"#7A7A7A"}
            />
            <View style={styles.inputArea__Generoinput}>
              <RNPickerSelect
                onValueChange={onChangeGenero}
                style={styles.inputArea__genero}
                placeholder={{ label: "Genero", value: null }}
                items={[
                  { label: "Masculino", value: "Masculino" },
                  { label: "Feminino", value: "Feminino" },
                ]}
              />
            </View>

            <TouchableOpacity
              style={styles.inputArea__data}
              title="DatePicker"
              onPress={() => {
                showMode("date");
              }}
            >
              <Text style={estiloDataDeNascimento}>{dataDeNascimento}</Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
            <TextInput
              style={styles.inputArea__Textinput}
              onChangeText={onChangeSenha}
              value={Senha}
              placeholder="Senha"
              placeholderTextColor={"#7A7A7A"}
              secureTextEntry
            />
            {regexSenha == null ? (
              console.log("")
            ) : (
              <Text style={styles.inputArea__MensagemErro}>{regexSenha}</Text>
            )}
            <TextInput
              style={styles.inputArea__Textinput}
              onChangeText={onChangeSenhaDois}
              value={SenhaDois}
              placeholder="Repetir Senha"
              placeholderTextColor={"#7A7A7A"}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.buttons__cadastrar}
              onPress={() => {
                if (Senha === SenhaDois) {
                  if (!validateSenha(Senha)) {
                    onChangeregexSenha(
                      "Sua senha precisa ter 8 caracteres, 1 letra, 1 letra maiúscula e 1 numero"
                    );
                  } else {
                    onChangeregexSenha(null);
                    cadastro();
                  }
                } else {
                  onChangeregexSenha("Senha não são iguais");
                }
              }}
            >
              <Text style={styles.buttons__cadastrarText}>cadastrar</Text>
            </TouchableOpacity>
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
  inputArea__header1: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#0A0D36",
    fontSize: 32,
  },
  inputArea__teste1: {
    color: "#7A7A7A",
  },
  inputArea__teste2: {
    color: "#000",
  },
  inputArea: {
    marginTop: statusBarHeight,
    alignItems: "center",
    width: "100%",
  },
  inputArea__Textinput: {
    backgroundColor: "#F4F4F4",
    height: 52,
    width: "80%",
    borderRadius: 10,
    padding: 10,
    marginTop: windowHeight * 0.02,
    fontSize: 15,
  },
  inputArea__MensagemErro: {
    fontFamily: "Montserrat_400Regular",
    width: "80%",
    color: "#f00",
  },
  inputArea__Generoinput: {
    backgroundColor: "#F4F4F4",
    height: 52,
    width: "80%",
    borderRadius: 10,
    padding: 10,
    marginTop: windowHeight * 0.02,
    fontSize: 15,
    justifyContent: "center",
  },
  inputArea__data: {
    marginTop: windowHeight * 0.02,
    backgroundColor: "#F4F4F4",
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "80%",
  },
  buttons__cadastrar: {
    marginTop: windowHeight * 0.04,
    backgroundColor: "#0A0D36",
    borderColor: "#0A0D36",
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    paddingVertical: 16,
    width: "80%",
  },
  buttons__cadastrarText: {
    color: "#fff",
    fontFamily: "Montserrat_400Regular",
    lineHeight: 28,
    fontSize: 16,
    textAlign: "center",
  },
});

export { TelaDeCadastro };
