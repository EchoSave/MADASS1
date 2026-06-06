import { stories_data } from "@/data/stories";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/** Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Instagram</Text>
          <View style={styles.headerIcons}>
            <Image
              source={require("../../assets/images/mainpage/threads-icon.webp")}
              style={styles.icon}
            />
            <Image
              source={require("../../assets/images/mainpage/3-horizontal-line-icon.webp")}
              style={styles.icon}
            />
          </View>
        </View>

        {/** Story */}
        <View style={styles.stories}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stories_data.map((story, i) => (
              <View key={story.id} style={styles.storyItem}>
                <Image source={story.avatar} style={styles.storyCircle} />
                <Text style={styles.storyText}>{story.username}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/** User newfeed */}
        <ScrollView style={styles.feed}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image
                source={require("../../assets/images/mainpage/user-account.jpg")}
                style={styles.postPic}
              />
              <Text style={styles.postUser}>iamjay123</Text>
            </View>

            <Image
              source={require("../../assets/images/mainpage/post-image.jpg")}
              style={styles.postImage}
            />

            <View style={styles.postActions}>
              <View style={styles.postActionIcons}>
                <Ionicons name="heart-outline" size={24} color="black" />
                <Text>1M</Text>
              </View>
              <View style={styles.postActionIcons}>
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                <Text>199</Text>
              </View>
              <View style={styles.postActionIcons}>
                <Ionicons name="paper-plane-outline" size={24} color="black" />
              </View>
            </View>

            <Text style={styles.likes}>Liked by user_1 and others</Text>

            <Text style={styles.caption}>
              <Text style={styles.postUser}>iamjay123</Text>
              Hello Instagram
            </Text>

            <Text style={styles.time}>2 hours ago</Text>
          </View>
        </ScrollView>

        {/** Bottom Navicons */}
        <View style={styles.bottomNav}>
          <Feather name="home" size={24} color="black" />
          <Feather name="search" size={24} color="black" />
          <Feather name="plus-square" size={24} color="black" />
          <Feather name="heart" size={24} color="black" />
          <Image
            source={require("../../assets/images/mainpage/user-account.jpg")}
            style={styles.icon}
          />
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
    fontSize: 28,
    fontWeight: "700",
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
    borderWidth: 2,
    borderColor: "#E1306C",
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
    borderWidth: 2,
    borderColor: "#E1306C",
  },
  postUser: {
    fontWeight: "bold",
    paddingRight: 8,
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
  postActionIcons: {
    flexDirection: "row",
    alignItems: "center",
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
  // navProfileIcon: {
  //   borderRadius: 13,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   tintColor: undefined,
  // },
});
