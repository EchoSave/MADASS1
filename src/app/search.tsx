import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView> 
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>
        </View> 
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Search functionality coming soon!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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