import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Marquee } from '@animatereactnative/marquee';
import DESTAQUES from '@/app/utils/homeDestaques';


export default function Index() {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Encontre o corte ideal para você</Text>

      <Marquee spacing={20} speed={0.4} direction="horizontal" style={{ width: "100%", marginTop:20 }}>
        <View style={styles.container}>

          {DESTAQUES.map((destaque, index) => (
            <View key={destaque.id} style={styles.card}>
              <ImageBackground
                source={destaque.img}
                style={styles.imageContainer}
                resizeMode="cover">
              </ImageBackground>
            </View>
          ))}
        </View>
      </Marquee>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", marginTop: 30},
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 339,
  },
  card: {
    marginRight: 10,

  },
  imageContainer: {
    width: 339,
    height: 225,
    borderRadius: 16,
  },
});
