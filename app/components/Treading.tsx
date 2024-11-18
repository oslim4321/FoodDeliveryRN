import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const TrendingItem = ({ item }: { item: any }) => {
  return (
    <TouchableOpacity
      className="bg-white items-center mx-2 py-4 px-3 rounded-lg shadow-sm"
      activeOpacity={0.8}
    >
      <Image source={item.image} className="w-20 h-20 mb-2 rounded-lg" />
      <Text className="font-semibold text-sm text-black">{item.title}</Text>
      <Text className="text-gray-400 text-xs mt-1">Starting</Text>
      <Text className="font-bold text-black mt-1">{item.price}</Text>
    </TouchableOpacity>
  );
};

const TopCategory = ({ categories }: { categories: any[] }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TrendingItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      className="mt-4"
    />
  );
};

export default TopCategory;
