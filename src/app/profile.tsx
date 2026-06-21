
import BottomNavIcons from "@/components/BottomNavIcons";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=47" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Saron</Text>
          <Text style={styles.username}>@saron.dev</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>272</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>255</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerText}>+ Add banners</Text>
        </TouchableOpacity>

        <View style={styles.dashboardCard}>
          <Text style={styles.dashboardTitle}>Your dashboard</Text>
          <Text style={styles.dashboardSubtitle}>
            122 views in the last 30 days.
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Share profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNavIcons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

  header: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  username: {
    fontSize: 14,
    color: "#aaa",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  statBox: { alignItems: "center" },

  statNumber: { fontSize: 18, fontWeight: "700", color: "#fff" },

  statLabel: { fontSize: 13, color: "#aaa" },

  bannerButton: {
    alignSelf: "center",
    backgroundColor: "#1a1a1a",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
  },

  bannerText: { color: "#ccc", fontWeight: "600" },

  dashboardCard: {
    backgroundColor: "#1a1a1a",
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  dashboardTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  dashboardSubtitle: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 4,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 10,
  },

  button: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },

  buttonText: { color: "#fff", fontWeight: "600" },
});