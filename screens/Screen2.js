import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ServiceCard from "../component/ServiceCard";

export default function Screen2({ navigation }) {
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
        Choose the number of services available ?
      </Text>
      <ServiceCard service="Gym" />
      <ServiceCard service="Swimming Pool" />
      <ServiceCard service="Tennis" />
      <ServiceCard service="Garden" />
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
          navigation.push("Screen3");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
