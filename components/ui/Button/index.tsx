import { TouchableOpacity, Text } from "react-native";

export default function Button({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} className="p-4 border border-white rounded-lg shadow-sm bg-elementBackground shadow-defaultText">
      <Text className="text-lg font-bold text-center text-defaultText">{label}</Text>
    </TouchableOpacity>
  );
}
