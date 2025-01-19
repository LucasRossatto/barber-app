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
import DESTAQUES from '../utils/homeDestaques';

export default function Index() {
  return (
    <ScrollView style={styles.body}>

      <View style={styles.header}>
        <Text style={styles.usernameText}>Username</Text>
        <View style={styles.userPhoto} />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="search" size={24} color="#8683A1" />
        <TextInput placeholderTextColor={"#8683A1"} placeholder="Pesquisar barbeiro, corte de cabelo..." style={styles.inputText} />
      </View>



      <View style={styles.subInputDetails}>
        <Entypo name="controller-record" size={16} color="#E5E7EB" />
        <Entypo name="controller-record" size={16} color="#0130a5" />
        <Entypo name="controller-record" size={16} color="#a7201d" />
        <Entypo name="controller-record" size={16} color="#0130a5" />
        <Entypo name="controller-record" size={16} color="#E5E7EB" />
        <View style={{ width: 32, height: 12, backgroundColor: "#a7201d", borderRadius: 24 }}></View>
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

      <Text style={styles.title}>Destaques</Text>

      <Marquee
        spacing={20}
        speed={0.5}
        direction="horizontal"
        style={{
          width: "100%",
          marginVertical: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {DESTAQUES.map((destaque) => (
            <View key={destaque.id} style={styles.card}>
              <ImageBackground
                source={destaque.img}
                style={styles.imageContainer}
                resizeMode="cover"
              />
            </View>
          ))
          }
        </View>
      </Marquee>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },
  usernameText: {
    fontSize: 22,
    fontWeight: "bold"
  },
  userPhoto: {
    width: 42,
    height: 42,
    borderRadius: 60,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: 250,
    marginRight: 20,
  },
  imageContainer: {
    width: "100%",
    height: 350,
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
  subInputDetails: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  profissionaisContainer: {
    marginVertical: 10,
    paddingRight: 20,
    flexDirection: "row",
    gap: 10,

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
