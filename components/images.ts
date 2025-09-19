import { ImageSourcePropType } from "react-native";

type img = {
  [key: string]: ImageSourcePropType;
};

const img = {
  illustrate: require("@/assets/project-img/illustration.png"),
  line: require("@/assets/project-img/Container.png"),
  google: require("@/assets/project-img/google.png"),
  apple: require("@/assets/project-img/apple.png"),
};

export default img;
