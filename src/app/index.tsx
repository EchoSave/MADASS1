import { ScrollView, Text, View } from "react-native";
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

