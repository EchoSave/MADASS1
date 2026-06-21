import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavIcons from "../components/BottomNavIcons";

const screenWidth = Dimensions.get("window").width;

const profilePic = require("../../assets/images/mainpage/user-account.jpg");
const mainPostPic = require("../../assets/images/mainpage/post-image.jpg");

export default function ProfileScreen() {
  const postImages = [
    mainPostPic,
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jk-vtoYPBBUyucxNYyHYbs_l8FqrgQilew&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GN_OtNhqsrOafJa9KrDQvSUYq3MoRB-pBg&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-aeNbpc8iTtTJ1Jn1aqI0W8mWIdzAkuv1mg&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PRxx3zVnN-vCLHT1Xk632jrWXO-w97t24Q&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Bc2kgsLO1_n57I0Qj7IWigbAeb4tO205-A&s" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Ionicons name="add-outline" size={24} color="#000" />
          </TouchableOpacity>

          <View style={styles.usernameRow}>
            <Ionicons name="lock-closed-outline" size={18} color="#000" />
            <Text style={styles.usernameTop}>lousing.uyn</Text>
            <Ionicons name="chevron-down-outline" size={18} color="#000" />
          </View>

          <View style={styles.rightIcons}>
            <View style={styles.atButton}>
              <Ionicons name="at-outline" size={22} color="#000" />
            </View>

            <TouchableOpacity>
              <Ionicons name="menu-outline" size={28} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileHeader}>
          <Image source={profilePic} style={styles.avatar} />

          <View style={styles.nameAndStats}>
            <Text style={styles.name}>Software Developer</Text>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>6</Text>
                <Text style={styles.statLabel}>posts</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>5500</Text>
                <Text style={styles.statLabel}>followers</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>1000</Text>
                <Text style={styles.statLabel}>following</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerText}>+ Add banners</Text>
        </TouchableOpacity>

        <View style={styles.dashboardCard}>
          <Text style={styles.dashboardTitle}>Your dashboard</Text>
          <Text style={styles.dashboardSubtitle}>
            2000 views in the last 30 days.
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Share profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="grid-outline" size={22} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="play-circle-outline" size={22} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="repeat-outline" size={22} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="camera-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.postsGrid}>
          {postImages.map((img, i) => (
            <Image key={i} source={img} style={styles.postImage} />
          ))}
        </View>
      </ScrollView>

      <BottomNavIcons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
  },

  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  usernameTop: { color: "#000", fontWeight: "700", fontSize: 18 },

  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  atButton: {
    backgroundColor: "#f2f2f2",
    borderRadius: 6,
    padding: 4,
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
  },

  avatar: { width: 90, height: 90, borderRadius: 45 },

  nameAndStats: { flex: 1, marginLeft: 16 },

  name: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 6,
  },

  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: { fontSize: 18, fontWeight: "700", color: "#000" },

  statLabel: { fontSize: 13, color: "#555" },

  bannerButton: {
    alignSelf: "flex-start",
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 10,
  },

  bannerText: { color: "#444", fontWeight: "600" },

  dashboardCard: {
    backgroundColor: "#f2f2f2",
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  dashboardTitle: { color: "#000", fontWeight: "700", fontSize: 15 },

  dashboardSubtitle: { color: "#555", fontSize: 13, marginTop: 4 },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 10,
  },

  button: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },

  buttonText: { color: "#000", fontWeight: "600" },

  profileButton: {
    width: 40,
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 10,
  },

  iconButton: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },

  postsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  postImage: {
    width: screenWidth / 3,
    height: screenWidth / 3,
  },
});
