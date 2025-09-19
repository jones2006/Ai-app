// import img from "@/components/images";
import img from "@/components/images";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboard() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View className="bg-back w-full h-full bg-white">
      <StatusBar barStyle={"dark-content"} backgroundColor={"#3269FF"} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 10,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        className="bg-back w-full h-full"
      >
        <SafeAreaView className="w-full flex-1 bg-back items-center ">
          <Image source={img.illustrate} className="mt-10 w-[80%] h-[50%]" />
          <View className="bg-white w-full h-[100%] mt-10 rounded-t-[30px] elevation-2xl border-gray-200 border-t-2 items-center gap-5">
            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-[1.8rem] text-heading w-[70%]  text-center mt-12"
            >
              Speak It, Plan It
            </Text>
            <Text
              style={{ fontFamily: "Poppins-Regular" }}
              className="text-xl text-heading w-[80%]  text-center"
            >
              Just say it, and let AI plan your tasks and schedule for you.
            </Text>
            <TouchableOpacity
              className="w-[80%] h-[4rem] rounded-full items-center justify-center bg-blue-500"
              onPress={() => {
                router.navigate("/Signup");
              }}
            >
              <Text
                className="text-white text-base"
                style={{ fontFamily: "Poppins-Bold" }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-[80%] h-[4rem] rounded-full items-center justify-center bg-blue-800"
              onPress={() => {
                router.navigate("/Signup");
              }}
            >
              <Text
                className="text-white text-base"
                style={{ fontFamily: "Poppins-Bold" }}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
