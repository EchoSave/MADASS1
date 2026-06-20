
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { REELS } from "../data/reels";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        {/* top of header */}
        <View style={styles.topRow}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={24} color="#000" style={styles.icon} />
            <Text style={styles.placeholder}>Search with Meta AI</Text>
          </View>
          <Ionicons name="filter" size={24} color="#000" style={styles.filterIcon} />
        </View>

        {/* bottom of header */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bottomofHeader}
        >
          {[
            "For you",
            "+",
            "Digital art",
            "Wildlife conservation",
            "Tattoo art",
            "Python",
            "Expo",
          ].map((item) => (
            <TouchableOpacity key={item} style={styles.chip}>
              <Text style={styles.chipText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={REELS}
        numColumns={3}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.gridItem} activeOpacity={1}>
            <Image source={item.image} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 10,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  bottomofHeader: {
    marginTop: 12,
  },
  icon: {
    marginRight: 6,
  },
  filterIcon: {
    paddingLeft: 10,
    borderRadius: 10,
  },
  placeholder: {
    marginLeft: 6,
    color: "#999",
    fontSize: 16,
  },
  chip: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },
  chipText: {
    fontSize: 14,
    color: "#333",
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
});
