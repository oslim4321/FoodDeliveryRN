import CustomButton from "@/app/components/CustomButton";
import { images } from "@/constants";
import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapPin } from "lucide-react-native";
import { router } from "expo-router";

function AccessLocationScreen() {
  function handleAccessLocation() {
    router.replace("/HomeScreen");
  }
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <View className="w-full mx-auto items-center px-5">
        <Image
          source={images.location}
          style={{ width: 300, height: 300, resizeMode: "contain" }}
        />

        <CustomButton
          containerStyle="bg-secondary w-full py-4 rounded-lg w-full"
          title="ACCESS LOCATION"
          textStyle="text-white font-bold text-lg"
          icon={<MapPin color="white" size={20} />}
          handlePress={handleAccessLocation}
        />

        <Text className="text-gray-500 text-center mt-4 px-6">
          DFOOD WILL ACCESS YOUR LOCATION{"\n"}ONLY WHILE USING THE APP
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default AccessLocationScreen;
