import img from "@/components/images";
import Entypo from "@expo/vector-icons/Entypo";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  return (
    <ScrollView className="w-full h-full bg-blue-200">
      <SafeAreaView className="mt-10">
        <TouchableOpacity
          className="bg-white w-16 h-16 rounded-full items-center justify-center ml-5 "
          onPress={() => {
            router.push("/onboard");
          }}
        >
          <Entypo name="chevron-left" size={24} color="blue" />
        </TouchableOpacity>

        {/* white area  */}
        <View className="w-full h-full bg-white mt-5 rounded-t-[20]">
          {/* text */}
          <View className="flex-row gap-2">
            <Text
              className="text-black font-bold text-2xl ml-5 mt-14"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Create an
            </Text>
            <Text
              className="text-blue-500 font-bold text-2xl mt-14"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Account ✍🏻
            </Text>
          </View>
          <Text
            className="text-black font-light text-base ml-5 mt-3"
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Enter a details to get started
          </Text>

          {/* email text and textInput */}
          <View className="flex-col gap-2">
            <Text
              className="mt-5 ml-5 text-lg"
              style={{ fontFamily: "Poppins-Bold" }}
            >
              Email
            </Text>
            <TextInput
              className="border-2 border-[#00000020] w-[92%] h-16 rounded-[10] ml-5 pl-5"
              placeholder="example@gmail.com"
            />
          </View>

          {/* Password text and textInput */}
          <View className="flex-col gap-2">
            <Text
              className="mt-5 ml-5 text-lg"
              style={{ fontFamily: "Poppins-Bold" }}
            >
              Password
            </Text>
            <TextInput
              className="border-2 border-[#00000020] w-[92%] h-16 rounded-[10] ml-5 pl-5"
              secureTextEntry={!passwordVisible}
              placeholder="*********"
            />
          </View>

          {/* remeber me and forgot */}
          <View className="flex-row justify-end mt-5 w-full">
            <TouchableOpacity>
              <Text
                className="text-blue-600 mr-5"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* button */}
          <View className="flex-col items-center mt-3">
            <TouchableOpacity
              className="bg-blue-600 w-[90%] h-16 rounded-2xl items-center justify-center mt-3"
              onPress={() => {
                router.navigate("/home");
              }}
            >
              <Text
                className="text-white"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
            <Text
              className="mt-4 text-xl"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Or
            </Text>
            <TouchableOpacity
              className="flex-row gap-5 items-center justify-center border-2 border-gray-300 w-[90%] h-16 mt-5 rounded-2xl"
              onPress={() => {
                router.navigate("/home");
              }}
            >
              <Image source={img.google} className="w-7 h-7" />
              <Text
                className="text-black font-medium text-base"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row gap-5 items-center justify-center border-2 border-gray-300 w-[90%] h-16 mt-5 rounded-2xl"
              onPress={() => {
                router.navigate("/home");
              }}
            >
              <Image source={img.apple} className="w-7 h-7" />
              <Text
                className="text-black font-medium text-base"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>

          {/* don't have a account and signup */}
          <View className="flex-row gap-2 justify-center mt-5">
            <Text style={{ fontFamily: "Poppins-Medium" }}>
              Do have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/home");
              }}
            >
              <Text
                className="text-blue-600"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
