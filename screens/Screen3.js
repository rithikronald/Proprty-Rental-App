import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ServiceCard from "../component/ServiceCard";
import { Picker } from "@react-native-community/picker";
import { CheckBox } from "react-native-elements";

export default function Screen3({ navigation }) {
  const [check, setcheck] = useState(false);
  const [feature, setFeature] = useState([
    { title: "Fan", checked: false },
    { title: "AC", checked: false },
    { title: "Fridge", checked: false },
    { title: "TV", checked: false },
  ]);
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
      <View
        style={{
          width: "85%",
          height: "40%",
          elevation: 8,
          borderRadius: 16,
          backgroundColor: "#c1c1c1",
          marginTop: "5%",
          padding: "4%",
        }}
      >
        <Text style={{ fontSize: 25 }}>Room 1</Text>
        <View>
          {feature.map(({ title, checked }) => (
            <CheckBox
              title={title}
              checked={checked}
              key={title}
              onPress={(event) => {
                setFeature((prevState) => {
                  return [
                    ...prevState.map((d) =>
                      d.title === title ? { title, checked: !checked } : d
                    ),
                  ];
                });
              }}
            />
          ))}
        </View>
      </View>

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
          navigation.push("Screen4");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

{
  /*<Picker
        selectedValue={language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>*/
}
