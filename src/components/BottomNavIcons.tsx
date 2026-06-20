import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import BellButton from "./BellButton";

const BottomNavIcons = () => {
  return (
    <div>
      <View style={styles.bottomNav}>
        <Link href="/">
          <Feather name="home" size={24} color="black" />
        </Link>
        <Feather name="plus-square" size={24} color="black" />
        <Link href="/message" asChild>
          <Feather name="send" size={24} color="black" />
        </Link>
        <Feather name="search" size={24} color="black" />
        <BellButton />
        <Image
          source={require("../../assets/images/mainpage/user-account.jpg")}
          style={styles.icon}
        />
      </View>
    </div>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    backgroundColor: "white",
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#ddd",
  },
});

export default BottomNavIcons;
