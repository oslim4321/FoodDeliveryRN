import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import GenericFormInputs from "@/app/shared/components/GenericFormInputs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@/app/components/CustomButton";
import { Link } from "expo-router";

function SignIn() {
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: any) => {
    Alert.alert("Form Data", JSON.stringify(data));
  };

  return (
    <SafeAreaView className="flex-1 bg-[#111827] h-full">
      {/* Header */}
      <View className="h-[25%] bg-[#111827] justify-center items-center">
        <Text className="text-3xl font-bold text-white mb-2">Log In </Text>
        <Text className="text-gray-300">
          Please sign in to your existing account
        </Text>
      </View>

      {/* Bottom Section */}
      <View className="h-[75%] bg-white rounded-tl-[3rem] rounded-tr-[3rem] p-6">
        {/* Email Input */}
        <GenericFormInputs
          control={control}
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          rules={{ required: "Email is required" }}
        />

        {/* Password Input */}
        <GenericFormInputs
          control={control}
          name="password"
          label="Password"
          placeholder="••••••••••••"
          secureTextEntry
          rules={{ required: "Password is required" }}
        />

        {/* Remember Me & Forgot Password */}
        <View className="flex-row justify-between items-center w-full mt-4 mb-6">
          <TouchableOpacity>
            <Text className="text-gray-600">Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-orange-500">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <TouchableOpacity onPress={handleSubmit(onSubmit)} className="w-full">
          <CustomButton
            containerStyle="bg-secondary w-full py-4 rounded-lg"
            title="Get Started"
            textStyle="text-white font-bold"
          />
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-600">Don’t have an account? </Text>
          <TouchableOpacity>
            <Link href={"/sign-up"} className="text-orange-500 font-bold">
              Sign Up
            </Link>
          </TouchableOpacity>
        </View>
        <Text className="text-center">Or</Text>
        {/* Social Media Icons */}
        <View className="flex-row justify-between space-x-4 mt-8  mx-10 mb-3">
          <TouchableOpacity className="bg-blue-600 w-20 h-20  justify-center items-center rounded-full">
            <FontAwesome name="facebook" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-400 w-20 h-20  justify-center items-center rounded-full">
            <FontAwesome name="twitter" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-black w-20 h-20  justify-center items-center rounded-full">
            <FontAwesome name="apple" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;
