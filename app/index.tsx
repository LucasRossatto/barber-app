import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.body}>
      <ImageBackground
        source={require("../assets/images/barber-background2.jpg")} 
        style={styles.imageContainer}
      >

      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>Bem vindo de volta</Text>
          <Text style={styles.subTitle}>
            Por favor faça seu login para acessar sua conta
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
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>

        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            alert("Login pressionado!");
          }}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>


        <View>
          <Text style={styles.orText}>Ainda não tem uma conta?</Text>
          <Text>Crie uma </Text>
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
    height: 320,
    width: "100%",
    resizeMode: "cover",
  },
  titlesContainer: { padding: 20, gap: 0, color: "#FFFFFF", marginTop: 10, justifyContent: "flex-start"},
  title: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#1C1C28",
    paddingHorizontal: 20,
    borderTopStartRadius: 38,
    borderTopEndRadius: 38,
    marginTop: -28, 
  },
  inputContainer: {
    marginTop: 20,
    alignItems: "flex-start",
  },
  label: { fontSize: 14, color: "#FFFFFF" },
  Input: {
    height: 40,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
  },
  btn: {
    backgroundColor: "#28293D",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotText: { color: "#FFFFFF", textAlign: "center", marginTop: 10 },
  orText: { color: "#FFFFFF", textAlign: "center", marginVertical: 10 },
});
