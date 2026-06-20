export interface Reel {
  id: string;
  image: any;
  views: number;
}


export const REELS: Reel[] = [
  {
    id: "1",
    image: require("../../assets/images/mainpage/user-1.jpg"),
    views: 12800,
  },
  {
    id: "2",
    image:require("../../assets/images/mainpage/user-2.jpg"),
    views: 54000,
  },
  {
    id: "3",
    image:require("../../assets/images/mainpage/user-3.jpg"),
    views: 23000,
  },
  {
    id: "4",
    image: require("../../assets/images/mainpage/user-4.jpg"),
    views: 45000,
  },
  {
    id: "5",
    image:require("../../assets/images/mainpage/user-5.jpg"),
    views: 54000,
  },
  {
    id: "6",
    image:require("../../assets/images/mainpage/user-6.jpg"),
    views: 32000,
  },
  {
    id: "7",
    image:require("../../assets/images/mainpage/user-7.jpg"),
    views: 15000,
  },
  {
    id: "8",
    image:require("../../assets/images/mainpage/user-8.jpg"),
    views: 27000,
  }
];
