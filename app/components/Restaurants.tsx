import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Restaurants = ({ product }: { product: any }) => {
  return (
    <View className="mt-8">
      <Text className="font-bold text-lg text-gray-800">Open Restaurants</Text>

      <View className="bg-white p-4 rounded-lg shadow-lg flex-row mt-4">
        <Image
          source={product.image}
          className="w-24 h-24 rounded-lg"
          resizeMode="cover"
        />
        <View className="ml-4 flex-1">
          <Text className="font-bold text-lg text-black">{product.name}</Text>
          <Text className="text-gray-500 text-sm">{product.description}</Text>
          <View className="flex-row products-center mt-2 space-x-4">
            <Text className="bg-orange-200 text-orange-500 px-2 py-1 rounded text-xs font-medium">
              {product.rating} ★
            </Text>
            <Text className="text-gray-500">{product.price}</Text>
            <Text className="text-gray-500">{product.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});
