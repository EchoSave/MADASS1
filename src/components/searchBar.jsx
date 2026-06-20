import { View, TextInput, StyleSheet, Animated, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";

export default function InstagramSearchBar() {
  const [query, setQuery] = useState("");
  const anim = useRef(new Animated.Value(0)).current;

  const onFocus = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#efefef", "#e3e3e3"],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: bgColor }]}>
      <Feather name="search" size={18} color="#666" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#999"
        value={query}
        onChangeText={setQuery}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});
