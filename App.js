import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
