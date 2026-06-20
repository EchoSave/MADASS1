import BottomNavIcons from "@/components/BottomNavIcons";
import { CHATS } from "@/data/chats";
import { NOTES } from "@/data/notes";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MessageScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/** 1. Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.usernameContainer}>
              <Text style={styles.headerUsername}>louisng.uyn</Text>
              <Feather name="chevron-down" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Feather
              name="edit"
              size={24}
              color="black"
              style={styles.headerIconRight}
            />
          </TouchableOpacity>
        </View>

        {/** Main Scroll Content */}
        <ScrollView
          style={styles.mainContent}
          showsVerticalScrollIndicator={false}
        >
          {/** 2. Search bar */}
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
              <Feather
                name="search"
                size={18}
                color="#8e8e93"
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Search or ask Meta AI"
                placeholderTextColor="#8e8e93"
                style={styles.searchInput}
              />
            </View>
          </View>

          {/** 3. Note */}
          <View style={styles.avatarNote}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.notesScrollContainer}
            >
              {/* Friends Note */}
              {NOTES.map((note) => (
                <View key={note.id} style={styles.avatarNoteItems}>
                  <View style={styles.avatarWrapper}>
                    <Image source={note.avatar} style={styles.noteAvatarImg} />

                    <View style={styles.noteBubble}>
                      <View style={styles.noteBubbleContent}>
                        {note.isAudio && (
                          <Ionicons
                            name="musical-notes"
                            size={10}
                            color="black"
                            style={styles.audioIcon}
                          />
                        )}
                        <Text style={styles.noteBubbleText} numberOfLines={1}>
                          {note.noteText}
                        </Text>
                      </View>
                      {note.subNote ? (
                        <Text style={styles.noteSubText} numberOfLines={1}>
                          {note.subNote}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                  <Text style={styles.noteUserText} numberOfLines={1}>
                    {note.username}
                  </Text>
                  {note.username === "louisng.uyn" ? (
                    <Text style={styles.locationOffText}>📍 Location off</Text>
                  ) : null}
                </View>
              ))}
            </ScrollView>
          </View>

          {/** 4. Type */}
          <View style={styles.type}>
            <Text style={styles.typeMessagesText}>Messages</Text>
            <TouchableOpacity>
              <Text style={styles.typeRequestsText}>Requests</Text>
            </TouchableOpacity>
          </View>

          {/** 5. Chat */}
          <View style={styles.messagesContainer}>
            {CHATS.map((chat) => (
              <TouchableOpacity
                key={chat.id}
                style={styles.chatRow}
                activeOpacity={0.7}
              >
                <View
                  style={
                    chat.hasStory
                      ? styles.storyCircleUnseen
                      : styles.storyCircleSeen
                  }
                >
                  <Image source={chat.avatar} style={styles.chatAvatarImg} />
                </View>

                <View style={styles.chatContent}>
                  <Text style={[styles.primaryText, { color: "black" }]}>
                    {chat.username}
                  </Text>
                  <View style={styles.messageDetailsRow}>
                    <Text
                      style={[
                        styles.secondaryText,
                        chat.unread
                          ? styles.unreadMessageText
                          : styles.readMessageText,
                      ]}
                      numberOfLines={1}
                    >
                      {chat.lastMessage}
                    </Text>
                    {chat.time ? (
                      <Text style={styles.readMessageText}> · {chat.time}</Text>
                    ) : null}
                    {chat.isMuted && (
                      <Ionicons
                        name="volume-mute"
                        size={14}
                        color="#8e8e93"
                        style={styles.muteIcon}
                      />
                    )}
                  </View>
                </View>

                {chat.unread && <View style={styles.unreadDot} />}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/** 6. Bottom Nav icons */}
        <BottomNavIcons />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // For light mode
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "#fff", position: "relative" },
  mainContent: { flex: 1, marginBottom: 50 },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5, // Thêm viền mờ dưới header cho giống IG
    borderColor: "#e1e1e1",
    position: "relative", // Làm điểm tựa cho phần Center căn giữa
    height: 55,
  },
  headerLeft: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  usernameContainer: { flexDirection: "row", alignItems: "center", gap: 4 },
  headerUsername: { color: "black", fontSize: 22, fontWeight: "bold" },
  headerIconRight: { padding: 2, zIndex: 12 },

  // Search bar
  searchBarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#efefef",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  searchIcon: { marginRight: 8 },
  searchInput: { color: "black", flex: 1, fontSize: 16 },

  // Note
  avatarNote: { marginTop: 25 },
  notesScrollContainer: { paddingHorizontal: 16, gap: 18 },
  avatarNoteItems: { alignItems: "center", width: 75 },
  avatarWrapper: {
    position: "relative",
    marginBottom: 8,
    alignItems: "center",
  },
  noteAvatarImg: {
    top: 10,
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#efefef",
  },

  // Note Bubble
  noteBubble: {
    position: "absolute",
    top: -10,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    maxWidth: 90,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#e1e1e1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  noteBubbleContent: { flexDirection: "row", alignItems: "center", gap: 2 },
  audioIcon: { marginRight: 2 },
  noteBubbleText: { color: "black", fontSize: 11, fontWeight: "500" },
  noteSubText: { color: "#8e8e93", fontSize: 9 },
  noteUserText: {
    color: "#000",
    fontSize: 12,
    textAlign: "center",
    marginTop: 2,
  },
  locationOffText: {
    color: "#e1306c",
    fontSize: 9,
    marginTop: 2,
    textAlign: "center",
  },

  // Type (Message + requests)
  type: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  typeMessagesText: { color: "black", fontSize: 16, fontWeight: "bold" },
  typeRequestsText: { color: "#8e8e93", fontSize: 16, fontWeight: "500" },

  // Chat
  messagesContainer: { paddingHorizontal: 16 },
  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    position: "relative",
  },
  chatAvatarImg: { width: 56, height: 56, borderRadius: 28 },
  storyCircleUnseen: {
    padding: 2,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: "#E1306C",
  },
  storyCircleSeen: {
    padding: 2,
    borderRadius: 33,
    borderWidth: 0,
  },
  chatContent: { flex: 1, marginLeft: 14, justifyContent: "center" },
  messageDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  unreadMessageText: { color: "black", fontWeight: "bold" },
  readMessageText: { color: "#8e8e93" },
  muteIcon: { marginLeft: 6 },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0095f6",
    position: "absolute",
    right: 10,
  },

  // Text
  primaryText: {
    fontSize: 15,
    fontWeight: "600",
  },
  secondaryText: {
    fontSize: 14,
    flex: 1,
  },
});
