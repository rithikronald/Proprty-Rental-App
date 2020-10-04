import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function OptionCard(props) {
  const [select, setSelect] = useState("#fff");

  return (
    <TouchableOpacity
      style={{
        width: "90%",
        height: "10%",
        elevation: 8,
        backgroundColor: select,
        borderRadius: 20,
        marginVertical: "5%",
        justifyContent: "center",
        padding: "2%",
      }}
      onPress={() => {
        setSelect(select == "#45CE30" ? "#fff" : "#45CE30");
      }}
    >
      <Text style={{ fontSize: 20 }}>{props.service}</Text>
    </TouchableOpacity>
  );
}
