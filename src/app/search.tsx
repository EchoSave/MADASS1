import BellButton from "@/components/BellButton";
import { stories_data } from "@/data/stories";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
          {/** Header */}
        <View style={styles.header}>
          </View>
        </View>

          {/** Story */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,   
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
    header: {
      paddingHorizontal: 12,
      paddingTop: 10,
      paddingBottom: 6,
      backgroundColor: "#fff",
    }
    title: {
    fontSize: 24,
    fontWeight: "700",
    },
    section: {
    marginBottom: 25,
    },
    sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    },
    sectionText: {
    fontSize: 14,
    color: "gray",
    },
});