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
  const [Senha, onChangeSenha] = React.useState(null);
  const [SenhaDois, onChangeSenhaDois] = React.useState(null);

  return (
    <View style={styles.body}>
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
        onChangeText={onChangeSenha}
        value={Senha}
        placeholder="Senha"
      />
      <TextInput
        style={styles.inputArea__Textinput}
        onChangeText={onChangeSenhaDois}
        value={SenhaDois}
        placeholder="Senha"
      />
      <TouchableOpacity
        style={styles.buttons__cadastrar}
        onPress={() => navigation.navigate("TelaLogin")}
      >
        <Text style={styles.buttons__cadastrarText}>cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAFCFE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputArea__Textinput: {
    backgroundColor: "#F4F4F4",
    height: 52,
    width: "80%",
    borderRadius: 10,
    padding: 10,
    marginTop: 21,
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
