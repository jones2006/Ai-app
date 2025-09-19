import img from "@/components/images";
import Feather from "@expo/vector-icons/Feather";
import { useFonts } from "expo-font";
import { router } from "expo-router";

import React from "react";

import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
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
        className="bg-back w-full h-full"
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
          <View className="w-full h-full items-center">
            <View className="flex-row">
              <Text
                className="mt-12 text-lg"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                19 Sep ,
              </Text>
              <Text
                className="text-lg mt-12 text-blue-600"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Thursday
              </Text>
            </View>

            <Image
              source={img.illustrate}
              className="w-[70%] h-80 mt-4 rounded-2xl"
            />
            <Text
              className="text-2xl text-center w-[80%] mt-8"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Just talk to Ai for 2mins and Build your plan.
            </Text>
            <TouchableOpacity
              className="bg-[#3269FF] w-[50%] h-14 items-center justify-center mt-7 rounded-xl"
              onPress={() => {
                router.navigate("/plan");
              }}
            >
              <Text
                className="text-white text-base"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                Build My plan
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
