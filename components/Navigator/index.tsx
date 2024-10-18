import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Navigator() {
  const router = useRouter();
  return (
    <View className="flex flex-row items-center justify-between px-8 py-2 bg-transparent">
      <TouchableOpacity className="items-center justify-center w-12 h-12 border border-white rounded-full shadow-md bg-elementBackground shadow-black">
        <Text className="text-2xl text-center text-defaultText">•••</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center justify-center w-12 h-12 border border-white rounded-full shadow-md bg-elementBackground shadow-black" onPress={() => router.push('/new-habit')}>
        <Text className="text-4xl text-center text-defaultText">+</Text>
      </TouchableOpacity>
    </View>
  );
}
