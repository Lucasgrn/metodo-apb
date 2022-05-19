import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";

const TelaDeCadastro = ({ navigation }) => {
  const [Nome, onChangeNome] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Senha, onChangeSenha] = React.useState(null);
  const [SenhaDois, onChangeSenhaDois] = React.useState(null);
  const [Genero, onChageGenero] = React.useState(null);

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
    <View style={styles.body}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeEmail}
          value={Email}
          placeholder="Email"
          placeholderTextColor={"#7A7A7A"}
        />
        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeNome}
          value={Nome}
          placeholder="Nome"
          placeholderTextColor={"#7A7A7A"}
        />
        <View style={styles.inputArea__Generoinput}>
          <RNPickerSelect
            style={styles.inputArea__genero}
            onValueChange={onChageGenero}
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
            display="spinner"
            onChange={onChange}
          />
        )}

        <TextInput
          style={styles.inputArea__Textinput}
          onChangeText={onChangeSenha}
          value={Senha}
          placeholder="Nova Senha"
          placeholderTextColor={"#7A7A7A"}
          secureTextEntry
        />
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
            let email = Email;
            let nome = Nome;
            let genero = Genero;
            let senha;
            if (Senha === SenhaDois) {
              senha = Senha;
            }
            console.log(
              `Email: ${email}, nome: ${nome}, genero: ${genero}, data de nascimento: ${dataDeNascimento} e senha: ${senha}`
            );
            navigation.navigate("TelaLogin");
          }}
        >
          <Text style={styles.buttons__cadastrarText}>cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea__teste1: {
    color: "#7A7A7A",
  },
  inputArea__teste2: {
    color: "#000",
  },
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
    justifyContent: "center",
  },
  inputArea__data: {
    marginTop: 21,
    backgroundColor: "#F4F4F4",
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "80%",
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
