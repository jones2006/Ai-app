import Feather from "@expo/vector-icons/Feather";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function plan() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View className="bg-back w-full h-full">
      <StatusBar barStyle={"dark-content"} backgroundColor={"#3269FF"} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
        className="w-full h-full"
      >
        <SafeAreaView className="w-full h-full bg-back items-center ">
          <View className="w-full mt-10 items-center flex-row justify-evenly gap-x-40">
            {/* Text and add btn */}
            <View className="flex-row gap-2">
              <Text
                className="text-[1.6rem] text-blue-500"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                Hello,
              </Text>
              <Text
                className="text-[1.6rem] text-Primary"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                Jones
              </Text>
            </View>
            <TouchableOpacity
              className="bg-[#3269FF] flex-row gap-1 w-12 h-12 items-center justify-center rounded-t-full rounded-r-full"
              onPress={() => {}}
            >
              <Feather name="info" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View className="w-full h-full items-center mt-12 gap-6">
            <View className="w-[60%] bg-[#CCD9FF] items-center justify-center rounded-full">
              <LottieView
                source={require("../assets/project-img/Audio&Voice-A-001.json")}
                style={{ width: 200, height: 240 }}
                autoPlay // Automatically plays the animation
                loop // Loops the animation indefinitely
              />
            </View>
            <TouchableOpacity className="bg-[#CCD9FF] w-[55%] h-14 items-center justify-center rounded-xl">
              <Text
                className="text-[#4862A8] text-base"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                Listening...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#3269FF] w-[40%] h-14 items-center justify-center rounded-xl"
              onPress={() => {
                router.navigate("/home");
              }}
            >
              <Text
                className="text-white text-base"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
