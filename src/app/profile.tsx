import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4.2k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>310</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
