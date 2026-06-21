import { Feather } from "@expo/vector-icons";
import React from "react";
import { Alert, Platform, Pressable } from "react-native";

export default function BellButton() {
  const showAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button Pressed");
    } else {
      Alert.alert("Alert Button Pressed");
    }
  };

  return (
    <Pressable style={{ padding: 10 }} onPress={showAlert}>
      <Feather name="bell" size={24} color="black" />
    </Pressable>
  );
}
