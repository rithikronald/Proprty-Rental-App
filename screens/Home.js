import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/house_bg.jpg")}
      style={{ width: "100%", height: "100%", flex: 1 }}
    >
      <View style={{ flex: 1, alignItems: "center", padding: "3%" }}>
        <Text
          style={{
            fontSize: 35,
            color: "#ffffff",
            fontWeight: "bold",
            marginTop: 40,
            padding: 10,
          }}
        >
          Here's a new platform to rent your properties !!!
        </Text>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: "#3498DB",
          padding: "3%",
          margin: "3%",
          alignItems: "center",
          marginBottom: "10%",
        }}
        onPress={() => {
          navigation.push("Screen1");
        }}
      >
        <Text
          style={{ fontSize: 20, color: "#ffffff", fontFamily: "monospace" }}
        >
          Start Renting
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
