import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateField from "react-native-datefield";
import RNPickerSelect from "react-native-picker-select";
import { app, auth } from '../config/firebase '
import { createUserWithEmailAndPassword } from "firebase/auth";

const TelaDeCadastro = ({ navigation }) => {
  const [Nome, onChangeNome] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Senha, onChangeSenha] = React.useState(null);
  const [SenhaDois, onChangeSenhaDois] = React.useState(null);
  const [Genero, onChageGenero] = React.useState(null);

  const cadastro = () => {
    createUserWithEmailAndPassword(auth, Email, Senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('HomeScreen', { idUser: user.uid })

      })
  }

  return (
    <View style={styles.body}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeEmail}
          value={Email}
          placeholder="Email"
        />
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeNome}
          value={Nome}
          placeholder="Nome"
        />
        <View style={styles.inputArea__Generoinput}>
          <RNPickerSelect
            onValueChange={onChageGenero}
            placeholder={{ label: "Genero", value: null }}
            items={[
              { label: "Masculino", value: "Masculino" },
              { label: "Feminino", value: "Feminino" },
            ]}
          />
        </View>
        {/* <DateField
          labelDate="Dia"
          labelMonth="Mes"
          labelYear="Ano"
          styleInput={styles.inputBorder}
        /> */}
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeSenha}
          value={Senha}
          placeholder="Nova Senha"
          secureTextEntry
        />
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeSenhaDois}
          value={SenhaDois}
          placeholder="Repetir Senha"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttons__cadastrar}
          onPress={() => {
            if (Senha === SenhaDois) {
              cadastro
            }
          }}
        >
          <Text style={styles.buttons__cadastrarText}>cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAFCFE",
    flex: 1,
  },
  inputArea: {
    marginTop: "40%",
    alignItems: "center",
    width: "100%",
  },
  inputArea__Textinput: {
    backgroundColor: "#F4F4F4",
    height: 52,
    width: "80%",
    borderRadius: 10,
    padding: 10,
    marginTop: 21,
    fontSize: 15,
  },
  inputArea__Generoinput: {
    backgroundColor: "#F4F4F4",
    height: 52,
    width: "80%",
    borderRadius: 10,
    padding: 10,
    marginTop: 21,
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  // inputBorder: {
  //   backgroundColor: "#F4F4F4",
  //   height: 52,
  //   width: "27%",
  //   borderRadius: 10,
  //   padding: 10,
  //   marginTop: 21,
  //   fontSize: 15,
  // },
  buttons__cadastrar: {
    marginTop: 40,
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
