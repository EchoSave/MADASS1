export interface NoteType {
  id: string;
  username: string;
  avatar: string;
  noteText: string;
  subNote: string;
  isAudio: boolean;
}
export const NOTES = [
  {
    id: "n",
    username: "louisng.uyn",
    avatar: require("../../assets/images/mainpage/user-account.jpg"),
    noteText: "Thinking about..",
    subNote: "",
    isAudio: false,
  },
  {
    id: "n1",
    username: "user_2",
    avatar: require("../../assets/images/mainpage/user-2.jpg"),
    noteText: "Love the way..",
    subNote: "RPT MCK",
    isAudio: true,
  },
  {
    id: "n2",
    username: "user_3",
    avatar: require("../../assets/images/mainpage/user-3.jpg"),
    noteText: "Argentina win",
    subNote: "",
    isAudio: false,
  },
  {
    id: "n3",
    username: "user_4",
    avatar: require("../../assets/images/mainpage/user-4.jpg"),
    noteText: "Smiles",
    subNote: "Harusou",
    isAudio: true,
  },
  {
    id: "n1",
    username: "user_5",
    avatar: require("../../assets/images/mainpage/user-5.jpg"),
    noteText: "Soledad",
    subNote: "Westlife",
    isAudio: true,
  },
  {
    id: "n1",
    username: "user_6",
    avatar: require("../../assets/images/mainpage/user-6.jpg"),
    noteText: "Happy New..",
    subNote: "ABBA",
    isAudio: true,
  },
];
