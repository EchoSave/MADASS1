export interface ChatType {
  id: string;
  username: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
  hasStory?: boolean;
  isMuted?: boolean;
}

export const CHATS = [
  {
    id: "1",
    username: "user_1",
    avatar: require("../../assets/images/mainpage/user-1.jpg"),
    lastMessage: "Sent 1h ago",
    time: "",
    unread: true,
    hasStory: true,
  },
  {
    id: "2",
    username: "user_2",
    avatar: require("../../assets/images/mainpage/user-2.jpg"),
    lastMessage: "Enjoy weekend bro!",
    time: "3h",
    unread: false,
    hasStory: false,
    isMuted: true,
  },
  {
    id: "3",
    username: "user_3",
    avatar: require("../../assets/images/mainpage/user-3.jpg"),
    lastMessage: "Reacted 😂 to your message",
    time: "22h",
    unread: false,
    hasStory: false,
  },
  {
    id: "4",
    username: "user_4",
    avatar: require("../../assets/images/mainpage/user-4.jpg"),
    lastMessage: "Hopefully, you'll get A+",
    time: "2d",
    unread: false,
    hasStory: true,
  },
  {
    id: "5",
    username: "user_5",
    avatar: require("../../assets/images/mainpage/user-5.jpg"),
    lastMessage: "Sent Tuesday",
    time: "",
    unread: false,
    hasStory: false,
  },
];
