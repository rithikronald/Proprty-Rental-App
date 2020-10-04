import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OptionCard from "../component/OptionCard";

export default function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, padding: "3%", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 35,
          color: "#000",
          fontWeight: "bold",
          marginTop: 40,
          padding: 10,
        }}
      >
        Choose the type of property ?
      </Text>
      <OptionCard rooms="1BHK" />
      <OptionCard rooms="2BHK" />
      <OptionCard rooms="3BHK" />
      <OptionCard rooms="4BHK" />
      <TouchableOpacity
        style={{
          padding: "3%",
          backgroundColor: "#3498DB",
          borderRadius: 10,
          width: "30%",
          alignItems: "center",
          alignSelf: "flex-end",
          margin: "5%",
          marginTop: "7%",
        }}
        onPress={() => {
          navigation.push("Screen2");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
