export interface StoryType {
  id: string;
  username: string;
  avatar: any;
  hasStory: boolean;
}

export const stories_data: StoryType[] = [
  {
    id: "1",
    username: "user_1",
    avatar: require("../../assets/images/mainpage/user-1.jpg"),
    hasStory: true,
  },
  {
    id: "2",
    username: "user_2",
    avatar: require("../../assets/images/mainpage/user-2.jpg"),
    hasStory: true,
  },
  {
    id: "3",
    username: "user_3",
    avatar: require("../../assets/images/mainpage/user-3.jpg"),
    hasStory: true,
  },
  {
    id: "4",
    username: "user_4",
    avatar: require("../../assets/images/mainpage/user-4.jpg"),
    hasStory: true,
  },
  {
    id: "5",
    username: "user_5",
    avatar: require("../../assets/images/mainpage/user-5.jpg"),
    hasStory: true,
  },
  {
    id: "6",
    username: "user_6",
    avatar: require("../../assets/images/mainpage/user-6.jpg"),
    hasStory: false,
  },
  {
    id: "7",
    username: "user_7",
    avatar: require("../../assets/images/mainpage/user-7.jpg"),
    hasStory: false,
  },
  {
    id: "8",
    username: "user_8",
    avatar: require("../../assets/images/mainpage/user-8.jpg"),
    hasStory: false,
  },
];
