import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Controller, Control } from "react-hook-form";
import { icons } from "@/constants/index";

type Props = {
  control: Control;
  name: string;
  label: string;
  rules?: object;
  placeholder: string;
  secureTextEntry?: boolean;
};

const GenericFormInputs = ({
  control,
  name,
  label,
  rules,
  placeholder,
  secureTextEntry,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full mb-4">
      <Text className="text-black mb-2">{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View className="relative">
              <TextInput
                className={`bg-[#f0f5fa] rounded-lg px-4 py-5 ${
                  secureTextEntry ? "pr-12" : ""
                }`}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secureTextEntry && !showPassword} // Handle password visibility
              />
              {secureTextEntry && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <Image
                    source={!showPassword ? icons.eye : icons.eyeHide}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              )}
            </View>
            {error && (
              <Text className="text-red-500 mt-1">{error.message}</Text>
            )}
          </>
        )}
      />
    </View>
  );
};

export default GenericFormInputs;
