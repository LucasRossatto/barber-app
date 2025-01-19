import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomInput from '../components/CustomInput';
import CustomButton from "../components/CustomButton";



export default function Index() {
  return (
    <View style={styles.body}>
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>Cadastre se </Text>
        <Text style={styles.subTitle}>Ao prencher todas as informações você criara uma conta</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <CustomInput
          placeholder={"Digite seu nome"}
          placeholderColor={undefined}
          borderColor={undefined}
          textColor={undefined}
          keyboardType={undefined}
          secureTextEntry={undefined} />

        <Text style={styles.label}>Email</Text>
        <CustomInput
          placeholder={"Digite seu email"}
          placeholderColor={undefined}
          borderColor={undefined}
          textColor={undefined}
          keyboardType={undefined}
          secureTextEntry={undefined} />

        <Text style={styles.label}>Telefone</Text>
        <CustomInput
          placeholder={"Digite seu telefone"}
          placeholderColor={undefined}
          borderColor={undefined} textColor=
          {undefined}
          keyboardType={"numeric"}
          secureTextEntry={undefined} />

        <Text style={styles.label}>Senha</Text>
        <CustomInput
          placeholder={"Digite sua senha"}
          placeholderColor={undefined}
          borderColor={undefined}
          textColor={undefined}
          keyboardType={"secure-text"}
          secureTextEntry={true}
        />

        <Text style={styles.label}>Confirmar senha</Text>

        <CustomInput
          placeholder={"Digite novamente sua senha"}
          placeholderColor={undefined}
          borderColor={undefined}
          textColor={undefined}
          keyboardType={"secure-text"}
          secureTextEntry={true}
        />

      </View>
      <CustomButton onPress={""} title={"Cadastrar"} alertText={"Cadastro pressionado!"} color={"#363062"} textColor={undefined} />

      <View style={styles.jaTemConta}>
        <Text style={styles.orText}>Já possui uma conta?</Text>
        <Text style={styles.contaText}>Entrar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  titlesContainer: { gap: 10, color: "#FFFFFF", marginTop: 60, marginBottom: 20, justifyContent: "flex-start", width: "100%" },
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
  },
  label: { fontSize: 14, color: "#000", fontWeight:"bold" },
  jaTemConta: { flexDirection: "row", alignItems: "center", gap: 5, justifyContent: "center", paddingHorizontal: 20,paddingTop:10, },
  orText: { color: "#8F90A6", fontSize: 14 },
  contaText: { color: "#363062", fontWeight: "bold", fontSize: 14 },
});
