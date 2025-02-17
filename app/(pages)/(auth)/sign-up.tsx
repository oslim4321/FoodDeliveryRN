import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import GenericFormInputs from "@/app/shared/components/GenericFormInputs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@/app/components/CustomButton";
import { Link, router } from "expo-router";

function SignUp() {
  const schema = z
    .object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
      confirmPassword: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
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
    router.replace("/access-location-screen");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#111827] h-full">
      {/* Header */}
      <View className="h-[20%] bg-[#111827] justify-center items-center">
        <Text className="text-3xl font-bold text-white mb-2">Sign Up</Text>
        <Text className="text-gray-300">
          Please sign up to create a new account
        </Text>
      </View>

      {/* Bottom Section */}
      <View className="h-[80%] bg-white rounded-tl-[3rem] rounded-tr-[3rem] p-6">
        {/* Name Input */}
        <GenericFormInputs
          control={control}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          rules={{ required: "Name is required" }}
        />

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

        {/* Confirm Password Input */}
        <GenericFormInputs
          control={control}
          name="confirmPassword"
          label="Re-Type Password"
          placeholder="••••••••••••"
          secureTextEntry
          rules={{ required: "Confirm Password is required" }}
        />

        {/* Submit Button */}
        <CustomButton
          containerStyle="bg-secondary w-full py-4 rounded-lg"
          title="Sign Up"
          textStyle="text-white font-bold"
          handlePress={handleSubmit(onSubmit)}
        />
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-600">Have An Account? </Text>
          <TouchableOpacity>
            <Link
              href={"/access-location-screen"}
              className="text-orange-500 font-bold"
            >
              Sign In
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUp;
