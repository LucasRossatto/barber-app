import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Marquee } from '@animatereactnative/marquee';
import DESTAQUES from '@/app/utils/homeDestaques';

export default function Index() {
  return (
    <ScrollView style={styles.body}>
      <Text style={styles.title}>Encontre o corte ideal para você</Text>

      <Marquee
        spacing={20}
        speed={0.5}
        direction="horizontal"
        style={{width: "100%", marginTop: 20}}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {DESTAQUES.map((destaque) => (
            <View key={destaque.id} style={styles.card}>
              <ImageBackground
                source={destaque.img}
                style={styles.imageContainer}
                resizeMode="cover"
              />
            </View>
          ))}
        </View>
      </Marquee>

      <View style={styles.inputContainer}>
        <FontAwesome name="search" size={24} color="#8683A1" />
        <TextInput placeholderTextColor={"#8683A1"} placeholder="Pesquisar barbeiro, corte de cabelo..." style={styles.inputText} />
      </View>
      <Text style={styles.title}>Conheça os nossos profissionais</Text>

      <View style={styles.profissionaisContainer}>
        <View style={styles.fotoProfissional}></View>
        <View style={styles.infoProfissinalContainer}>
          <Text style={[styles.infoText, { fontWeight: "bold" }]}>Nome</Text>
          <View style={styles.infosRow}>
            <AntDesign name="star" size={24} color="#8683A1" />
            <Text style={[styles.infoText, { color: "#8683A1" }]}>Avaliação</Text>
          </View>
          <View style={styles.infosRow}>
            <Entypo name="scissors" size={24} color="#8683A1" />
            <Text style={[styles.infoText, { color: "#8683A1" }]}>Especializacao</Text>
          </View>
        </View>
      </View>
      <View style={styles.profissionaisContainer}>
        <View style={styles.fotoProfissional}></View>
        <View style={styles.infoProfissinalContainer}>
          <Text style={[styles.infoText, { fontWeight: "bold" }]}>Nome</Text>
          <View style={styles.infosRow}>
            <AntDesign name="star" size={24} color="#8683A1" />
            <Text style={[styles.infoText, { color: "#8683A1" }]}>Avaliação</Text>
          </View>
          <View style={styles.infosRow}>
            <Entypo name="scissors" size={24} color="#8683A1" />
            <Text style={[styles.infoText, { color: "#8683A1" }]}>Especializacao</Text>
          </View>
        </View>
      </View><View style={styles.profissionaisContainer}>
        <View style={styles.fotoProfissional}></View>
        <View style={styles.infoProfissinalContainer}>
          <Text style={[styles.infoText, { fontWeight: "bold" }]}>Nome</Text>
          <View style={styles.infosRow}>
            <AntDesign name="star" size={18} color="#8683A1" />
            <Text style={[styles.infoText, { color: "#8683A1" }]}>Avaliação</Text>
          </View>
          <View style={styles.infosRow}>
            <Entypo name="scissors" size={18} color="#8683A1" />
            <Text style={[styles.infoText, { color: "#8683A1" }]}>Especializacao</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", marginTop: 30 },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: 300,
    marginRight: 20,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    overflow: "hidden",
  },
  inputContainer: {
    width: '100%',
    borderRadius: 8,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 10,
    backgroundColor: "#EBF0F5"
  },
  inputText: {
    fontSize: 14,
    flex: 1
  },
  profissionaisContainer: {
    marginVertical: 10,
    paddingRight: 20,
    borderWidth: 1, flexDirection: "row", gap: 10

  },
  fotoProfissional: {
    height: 100, width: 100, backgroundColor: "#000", borderRadius: 8,
  },

  infoProfissinalContainer: {
    flex: 1, gap: 10
  },
  infoText: {
  },
  infosRow: {
    alignItems: "center", flexDirection: "row", gap: 8
  },
});
