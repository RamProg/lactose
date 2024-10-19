import { TouchableOpacity, Text } from "react-native";
import clsx from "clsx";

export default function Button({
  label,
  onPress,
  extraClassName,
}: {
  label: string;
  onPress: () => void;
  extraClassName?: TouchableOpacity["props"]["className"];
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx(
        "p-4 border border-white rounded-lg shadow-sm bg-elementBackground shadow-defaultText",
        extraClassName
      )}
    >
      <Text className="text-lg font-bold text-center text-defaultText">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
