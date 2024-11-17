import React, { useState, useRef } from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { OnboardingType } from "@/app/shared/types";
import CustomButton from "@/app/components/CustomButton";
import { router } from "expo-router";

const data = [
  {
    title: "All your favorites",
    description:
      "Get all your loved foods in one place, just place the order and we do the rest.",
    image: require("@/assets/images/Onboarding_01.png"),
  },
  {
    title: "Order from chosen chef",
    description:
      "Get all your loved foods in one place, just place the order and we do the rest.",
    image: require("@/assets/images/Onboarding_02.png"),
  },
  {
    title: "Free delivery offers",
    description:
      "Get all your loved foods in one place, just place the order and we do the rest.",
    image: require("@/assets/images/Onboarding_03.png"),
  },
];

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<ICarouselInstance>(null);
  const { width } = useWindowDimensions();

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      ref.current?.scrollTo({ index: currentIndex + 1, animated: true });
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/(pages)/(auth)/sign-in");
    }
  };

  const handleSkip = () => {
    const lastIndex = data.length - 1;
    ref.current?.scrollTo({ index: lastIndex, animated: true });
    setCurrentIndex(lastIndex);
  };

  const handleSnap = (index: number) => {
    ref.current?.scrollTo({ index: index, animated: true });

    setCurrentIndex(index);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Carousel
        ref={ref}
        data={data}
        defaultIndex={0}
        renderItem={({ item }) => <BackImage item={item} />}
        onSnapToItem={handleSnap}
        width={width}
        loop={false}
      />

      {/* Dot Navigation */}
      <View className="flex-row justify-center gap-2 my-4">
        {data.map((_, i) => (
          <Dot key={i} index={i} currentIndex={currentIndex} />
        ))}
      </View>

      {/* Buttons */}
      <View className="absolute bottom-10 w-full px-4">
        <CustomButton
          containerStyle="mb-2 bg-secondary"
          title={currentIndex === data.length - 1 ? "Get Started" : "Next"}
          handlePress={handleNext}
          textStyle="!text-white font-bold"
        />
        <CustomButton
          containerStyle="bg-transparent border border-gray-300"
          title="Skip"
          handlePress={handleSkip}
          textStyle="text-gray-500 font-bold"
        />
      </View>
    </SafeAreaView>
  );
};

const BackImage = ({ item }: { item: OnboardingType }) => {
  const { width } = useWindowDimensions();

  return (
    <View className="w-full items-center">
      <Image source={item.image} style={{ width, height: 350 }} />
      <Text className="text-xl font-bold text-center text-black my-4">
        {item.title}
      </Text>
      <Text className="text-base text-gray-600 text-center mx-5">
        {item.description}
      </Text>
    </View>
  );
};

const Dot = ({
  index,
  currentIndex,
}: {
  index: number;
  currentIndex: number;
}) => {
  return (
    <View
      className={`w-3 h-3 rounded-full ${
        currentIndex === index ? "bg-secondary" : "bg-gray-300"
      }`}
    />
  );
};

export default Onboarding;
