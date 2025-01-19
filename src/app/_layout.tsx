import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

import { View, Text, StyleSheet } from 'react-native';


export default function TabLayout() {
  return <Tabs
    screenOptions={{
      tabBarStyle: {
        height: 80,
        paddingTop: 20,
        alignContent: "center",
        justifyContent: "space-around"
      },
      headerShown: false,
      tabBarInactiveTintColor: "#94A3B8",
      tabBarActiveTintColor: "#363062",
      tabBarShowLabel: false,
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        tabBarIcon: ({ color }) => (
          <View style={styles.views}>
            <Feather name="home" size={24}color={color} />
            <Text style={{ color: color, fontSize: 10, fontWeight: "bold" }}>home</Text>
          </View>
        ),
      }}
    />
    <Tabs.Screen
      name="booking"
      options={{
        tabBarIcon: ({ color }) => (
          <View style={styles.views}>
            <FontAwesome5 name="calendar-day" size={24} color={color} />
            <Text style={{ color: color, fontSize: 10, fontWeight: "bold" }}>Agendamento</Text>
          </View>
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        tabBarIcon: ({ color }) => (
          <View style={styles.views}>
            <FontAwesome name="user" size={24} color={color} />
            <Text style={{ color: color, fontSize: 10, fontWeight: "bold" }}>Perfil</Text>
          </View>

        ),
      }}
    />

  </Tabs>

}

const styles = StyleSheet.create({
  views: {
    alignItems: "center",
    justifyContent: "center",
    width: 80
  }
});