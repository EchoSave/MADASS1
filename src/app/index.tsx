import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.logo}>Instagram</Text>
          <View style={styles.headerIcons}>
            <View style={styles.icon} />
            <View style={styles.icon} />
          </View>
        </View>

        <View style={styles.stories}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from({ length: 8 }).map((_, i) => (
              <View key={i} style={styles.storyItem}>
                <View style={styles.storyCircle} />
                <Text style={styles.storyText}>User {i + 1}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <ScrollView style={styles.feed}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postPic} />
              <Text style={styles.postUser}>username</Text>
            </View>

            <View style={styles.postImage} />

            <View style={styles.postActions}>
              <View style={styles.icon} />
              <View style={styles.icon} />
              <View style={styles.icon} />
            </View>

            <Text style={styles.likes}>Liked by user1 and others</Text>

            <Text style={styles.caption}>
              <Text style={styles.postUser}>username </Text>
              caption text here
            </Text>

            <Text style={styles.time}>2 hours ago</Text>
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          {Array.from({ length: 5 }).map((_, i) => (
            <View key={i} style={styles.navIcon} />
          ))}
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "white" },
  container: { flex: 1, backgroundColor: "white" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#ddd",
  },

  stories: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  storyItem: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eee",
    marginBottom: 4,
  },
  storyText: {
    fontSize: 12,
  },

  feed: { flex: 1 },

  post: { marginBottom: 24 },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  postPic: {
    width: 32,
    height: 32,
    borderRadius: 15,
    backgroundColor: "#eee",
    marginRight: 8,
  },
  postUser: {
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#ccc",
  },
  postActions: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  likes: {
    fontWeight: "bold",
    paddingHorizontal: 12,
  },
  caption: {
    paddingHorizontal: 12,
    marginTop: 2,
  },
  time: {
    paddingHorizontal: 12,
    marginTop: 4,
    fontSize: 12,
    color: "#888",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderColor: "#ddd",
  },
  navIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#ddd",
  },
});
