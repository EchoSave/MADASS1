import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const imageSize = width / 3;

const fakePosts = [
  "https://picsum.photos/400?random=1",
  "https://picsum.photos/400?random=2",
  "https://picsum.photos/400?random=3",
  "https://picsum.photos/400?random=4",
  "https://picsum.photos/400?random=5",
  "https://picsum.photos/400?random=6",
];

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Image
            source={{ uri: "https://i.pravatar.cc/200" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Saron</Text>
          <Text style={styles.username}>@saron.dev</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>273</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>250</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.sectionText}>
            Software development student at SAIT. Interested in mobile apps,
            React Native, and UI design.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Posts</Text>
        </View>

        <View style={styles.postsGrid}>
          {fakePosts.map((img, i) => (
            <Image key={i} source={{ uri: img }} style={styles.postImage} />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
  },
  username: {
    fontSize: 16,
    color: "gray",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
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
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
  postsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  postImage: {
    width: imageSize,
    height: imageSize,
    borderWidth: 1,
    borderColor: "#eee",
  },
});
