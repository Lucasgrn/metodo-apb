import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const TelaDeCadastro = ({ navigation }) => {
  const [Nome, onChangeNome] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [DataDeNascimento, onChangeDataDeNascimento] = React.useState(null);
  const [Genero, onChangeGenero] = React.useState(null);
  const [Senha, onChangeSenha] = React.useState(null);
  const [SenhaDois, onChangeSenhaDois] = React.useState(null);

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
          placeholder="Usuário"
        />
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeGenero}
          value={Genero}
          placeholder="Genero"
        />
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeDataDeNascimento}
          value={DataDeNascimento}
          placeholder="Data de nascimento"
        />
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeSenha}
          value={Senha}
          placeholder="Senha"
          secureTextEntry
        />
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeSenhaDois}
          value={SenhaDois}
          placeholder="Senha"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttons__cadastrar}
          onPress={() => navigation.navigate("TelaLogin")}
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
