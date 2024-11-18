import { Text, TouchableOpacity, View } from "react-native";
type Props = {
  title: string;
  handlePress?: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
  icon?: JSX.Element; // Optional prop for an icon
};

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  isLoading,
  textStyle,
  icon,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`rounded-full min-h-[64px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <View className="flex-row items-center justify-center">
        {icon && <View className="mr-2">{icon}</View>}{" "}
        {/* Display icon if provided */}
        <Text className={`font-psemibold ${textStyle}`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
