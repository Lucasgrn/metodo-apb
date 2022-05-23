import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const TelaInformacoes = ({ navigation }) => {
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
      <View style={styles.bemvindo}>
        <ImageBackground
          source={require("../assets/images/informacoes.png")}
          style={styles.bemvindo__imagemProfessor}
        ></ImageBackground>
        <Text style={styles.bemvindo__header1}>Mestre Pajé</Text>
        <View style={styles.sobre}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            overScrollMode={"never"}
          >
            <Text style={styles.sobre__header2}>
              Disposição Histórica – Mestre Pajé{" "}
            </Text>
            <Text style={styles.sobre__paragrafo}>
              Com a palavra... Geová José da Silva, nascido em 23 de julho de
              1975, em Sítio Conceição Distrito de Umbuzeiro – na Paraíba. Filho
              de José Maria da Silva Filho e Josefa Maria da Silva, o Sr. Pajé
              teve seu primeiro contato com as artes marciais através do seu
              irmão mais velho, o qual praticava kung fu. Com apenas 10 anos, o
              mestre pediu ao seu irmão para lhe repassar seus ensinamentos
              durante os finais de semana, haja visto que, durante o período de
              segunda a sexta, os mesmos se deslocavam para a roça para
              trabalharem no corte da cana e como serventes de pedreiro, ações
              estas que eram executadas nas fazendas da região para garantir a
              sobrevivência. Desta forma, de dez aos catorze anos esta lida foi
              vivenciada. Aos 14 anos, o Sr. Pajé se mudou com sua família para
              Santa Cruz do Capibaribe, continuando, inclusive, como servente de
              pedreiro (ficando neste trabalho até os 16 anos). Depois deste
              período, Geová deu início ao trabalho em fábricas de confecções,
              onde seu serviço consistia em retirar pontas de linhas das roupas.
              Neste mesmo período, parou os seus estudos em virtude do excesso
              do trabalho e, também, teve seu primeiro contato com a capoeira
              (numa academia de kung fu a qual seu irmão pertencia). Tal dia foi
              registrado como 15 de julho de 1991, data esta quando o professor
              de kung fu decidiu instituir a prática da capoeiragem e formar um
              grupo. Mesmo com a problemática de que ninguém detinha sequer
              noção do jogo da capoeira, o professor de kung fu insistiu na
              formação do grupo. Como não havia nenhuma referência na cidade com
              a capoeira (instrumentos, aulas e musicalidade), decidiram colocar
              uma fita de áudio em um som e “brincar” de capoeira. Desta forma,
              foi iniciada a divulgação da prática na cidade. Em dias em que
              eram solicitadas apresentações em eventos culturais da cidade,
              novamente a fita de aúdio era colocada e a “brincadeira de
              capoeira” iniciada! Nos eventos, como era novidade, o grupo (ainda
              sem nome) era muito aplaudido, o que gerou motivação efetiva. Não
              obstante, para honrar a confiança da comunidade, todos procuraram
              saber um pouco mais desta arte, o que ocasionou o aprendizado
              acerca dos instrumentos e das cantigas. Após um certo tempo, foram
              dispostas apresentações com berimbau, pandeiros e cânticos da
              capoeira. Em meio a tudo isso, no final do ano de 1998, José
              Marcos – um dos integrantes mais jovens do grupo – fez uma viagem
              à Bahia e conheceu o capoeirista de nome Acauã – que fazia parte
              do Grupo Capoeira Brasil o convidou para pertencer ao grupo
              citado. Na volta de sua viagem, trouxe a proposta de filiar todos,
              mas encontrou resistência no seu convite. No entanto, conversando
              com o Sr. Geová (que era o integrante mais antigo do grupo ainda
              sem nomenclatura) e tendo colocado algumas proposições, indicou
              que seria interessante todos participarem e trazer o Grupo
              Capoeira Brasil para Santa Cruz do Capibaribe – o qual seria uma
              oportunidade para crescimento e maior reconhecimento dos trabalhos
              anteriormente desenvolvidos. Foi aceito de imediato! Em um momento
              subsequentemente, o Sr. Geová conheceu o Professor Kel (Recife) e
              através deste puderam chegar ao Mestre Zebrinha, com quem passaram
              a treinar em 2002. Por motivos variados, o Mestre Zebrinha fundou
              o seu próprio grupo em 2002, intitulado Legião Brasileira de
              Capoeira. Neste momento, houve uma certa divisão! O Sr. Geová
              optou pelo Legião e o Sr.José Marcos permaneceu com o Capoeira
              Brasil. A esta altura, uma nova história foi traçada com o Grupo
              Legião Brasileira de Capoeira e desde então tem-se obtido grandes
              feitos e resultados. O sr. Geová, hoje mestre Pajé, tornou-se
              responsável pelo Legião Brasileira de Capoeira em Pernambuco, com
              trabalhos disseminados pela região e pela Paraíba, Alagoas e Minas
              Gerais. Em 21 de maio de 2005, Geová recebeu sua corda de
              professor pelo Legião Brasileira de Capoeira. Em 2009, foi a vez
              da corda de contramestre.
            </Text>
            <Text style={styles.sobre__header2}>Estilo de Capoeira</Text>
            <Text style={styles.sobre__paragrafo}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown{" "}
            </Text>
            <Text style={styles.sobre__header2}>Por que fazer o curso?</Text>
            <Text style={styles.sobre__paragrafo}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown{" "}
            </Text>
          </ScrollView>
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

  bemvindo: {
    alignItems: "flex-start",
    marginTop: 62,
    marginLeft: 24,
    marginRight: 24,
  },
  bemvindo__imagemProfessor: {
    width: "100%",
    height: 230,
  },
  bemvindo__header1: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#0A0D36",
    fontSize: 20,
    marginTop: 35,
  },
  sobre: {
    marginTop: 25,
  },
  sobre__header2: {
    fontFamily: "Montserrat_400Regular",
    color: "#000",
    fontSize: 15,
    marginTop: 15,
  },
  scrollView: {
    marginBottom: 365,
  },
  sobre__paragrafo: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: "#7A7A7A",
    marginTop: 8,
  },
});

export { TelaInformacoes };
