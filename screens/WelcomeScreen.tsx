import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handleGetStarted = () => {
    // Navigate to main app for now (will be changed to auth later)
    navigation.replace("Main");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header with logo */}
        <View className="items-center pt-12 pb-8">
          <Image
            source={require("../assets/Dropit-Logo.png")}
            className="w-16 h-16"
            resizeMode="contain"
          />
        </View>

        {/* Main illustration */}
        <View className="flex-1 items-center justify-center px-8">
          <Image
            source={require("../assets/welcome.png")}
            className="w-80 h-80"
            resizeMode="contain"
          />
        </View>

        {/* Bottom content */}
        <View className="px-8 pb-12">
          {/* Title */}
          <Text className="text-3xl font-bold text-center text-gray-900 mb-4">
            Welcome to Dropit
          </Text>
          
          {/* Subtitle */}
          <Text className="text-lg text-center text-gray-600 mb-8 leading-6">
            Fast, reliable delivery service{"\n"}right to your doorstep
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity
            onPress={handleGetStarted}
            className="bg-yellow-400 rounded-full py-4 px-8 shadow-sm"
            style={{ backgroundColor: "#FFD95A" }}
          >
            <Text className="text-center text-lg font-semibold text-gray-900">
              Get Started
            </Text>
          </TouchableOpacity>

          {/* Skip option */}
          <TouchableOpacity
            onPress={handleGetStarted}
            className="mt-4 py-2"
          >
            <Text className="text-center text-gray-500 text-base">
              Skip for now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}