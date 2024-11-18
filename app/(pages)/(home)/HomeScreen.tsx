import Restaurants from "@/app/components/Restaurants";
import SearchInput from "@/app/components/SearchInput";
import TopCategory from "@/app/components/Treading";
import { images } from "@/constants";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const categories = [
    {
      id: "1",
      title: "Pizza",
      price: "$70",
      image: require("@/assets/images/pizza.png"),
    },
    {
      id: "2",
      title: "Burger",
      price: "$50",
      image: require("@/assets/images/pizza.png"),
    },
    {
      id: "3",
      title: "Pasta",
      price: "$60",
      image: require("@/assets/images/pizza.png"),
    },
    {
      id: "4",
      title: "Pizza",
      price: "$70",
      image: require("@/assets/images/pizza.png"),
    },
    {
      id: "5",
      title: "Burger",
      price: "$50",
      image: require("@/assets/images/pizza.png"),
    },
    {
      id: "6",
      title: "Pasta",
      price: "$60",
      image: require("@/assets/images/pizza.png"),
    },
  ];

  const restaurants = [
    {
      id: "1",
      name: "Rose Garden Restaurant",
      description: "Burger - Chicken - Rice - Wings",
      rating: 4.7,
      price: "Free",
      time: "20 min",
      image: require("@/assets/images/restaurant.png"),
    },
  ];

  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: any) => <Restaurants product={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            {/* Header Section */}
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-gray-400 text-sm font-medium">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-bold text-black">Selim</Text>
              </View>
              <Image
                source={images.location}
                className="w-9 h-9 rounded-full"
                resizeMode="contain"
              />
            </View>

            {/* Search Input */}
            <SearchInput />

            {/* Categories Section */}
            <View className="mt-6">
              <Text className="font-bold text-lg text-gray-800">
                Categories
              </Text>
              <TopCategory categories={categories} />
            </View>

            {/* Trending Section */}
            {/*  */}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
