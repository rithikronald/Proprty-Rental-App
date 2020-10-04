import React, { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={{
          padding: "3%",
          backgroundColor: "#3498DB",
          borderRadius: 10,
          width: "80%",
          alignItems: "center",
          margin: "5%",
          marginTop: "7%",
        }}
        onPress={pickImage}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Upload Image</Text>
      </TouchableOpacity>
      {image && (
        <View>
          <Image
            source={{ uri: image }}
            style={{ width: 350, height: 300, borderRadius: 16 }}
          />

          <TouchableOpacity
            style={{
              padding: "3%",
              backgroundColor: "#3498DB",
              borderRadius: 10,
              alignItems: "center",
              margin: "5%",
              marginTop: "3%",
            }}
            onPress={() => {
              NetInfo.fetch().then((state) => {
                if (state.isConnected) {
                  ToastAndroid.show(
                    "Network Available" + " " + "Submited",
                    ToastAndroid.SHORT
                  );
                } else {
                  ToastAndroid.show(
                    "Network not available" + " " + "Not submited",
                    ToastAndroid.SHORT
                  );
                }
              });
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
