import { View } from "react-native";
import Button from "@/components/ui/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function DevMenu() {
  const showStorage = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const storage = await AsyncStorage.multiGet(keys);

    console.log(storage);
  };

  const clearStorage = async () => {
    await AsyncStorage.clear();
  };
  return (
    <View className="flex-1 px-4 py-6">
      <Button label="Show Storage" onPress={showStorage} extraClassName="mb-4" />
      <Button label="Clear Storage" onPress={clearStorage} extraClassName="mb-4" />
      <Button label="Back" onPress={() => router.back()} />
    </View>
  );
}
