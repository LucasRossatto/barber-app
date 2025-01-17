import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import CustomButton from "./components/CustomButton";

export default function Index() {
  return (
    <View style={styles.body}>
      <ImageBackground
        source={require("./assets/images/barber-background.jpg")}
        style={styles.imageContainer}
      >

      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>Bem vindo de volta</Text>
          <Text style={styles.subTitle}>Entre para acessar sua conta
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.Input}
            placeholder="Digite seu email"
            placeholderTextColor="#8F90A6"
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.Input}
            placeholder="Digite sua senha"
            keyboardType="visible-password"
            placeholderTextColor="#8F90A6"
          />

        </View>
        <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
        <CustomButton onPress={""} title={"Entrar"} alertText={"Login pressionado!"} color={"#363062"} textColor={undefined}/>
        


        <View style={styles.semConta}>
          <Text style={styles.orText}>Ainda não tem uma conta?</Text>
          <Text style={styles.contaText}>Criar conta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageContainer: {
    height: 360,
    width: "100%",
    resizeMode: "cover",
  },
  titlesContainer: { padding: 20, gap: 10, color: "#FFFFFF", marginTop: 10, justifyContent: "flex-start", width:"100%"},
  title: {
    fontSize: 28,
    color: "#363062",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#6B7280",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    borderTopStartRadius: 38,
    borderTopEndRadius: 38,
    marginTop: -28,
  },
  inputContainer: {
    alignItems: "flex-start",
  },
  label: { fontSize: 14, color: "#000", fontWeight:"bold" },
  Input: {
    height: 40,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    marginTop:5,
    marginBottom:20,
    padding: 10,
    borderColor: "#D1D5DB",
    color: "#000000",
  },
  btn: {
    backgroundColor: "#363062",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:20
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  esqueceuSenha: { color: "#363062", textAlign: "right", fontWeight:"bold"},
  orText: {color: "#8F90A6", fontSize:14},
  contaText:{color:"#363062", fontWeight:"bold",fontSize:14},
  semConta:{flexDirection:"row",alignItems:"center", gap:5, justifyContent:"center", paddingHorizontal:20},
});
