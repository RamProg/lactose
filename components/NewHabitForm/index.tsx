import { useRouter } from "expo-router";

import { Text, TextInput } from "react-native";

import { View } from "react-native";

import Button from "@/components/ui/Button";
import useHabits from "@/hooks/useHabits";
import { useState } from "react";
import * as Crypto from "expo-crypto";

export default function NewHabitForm() {
  const [habitName, setHabitName] = useState("");
  const router = useRouter();
  const { addHabit } = useHabits();

  const handleCreateHabit = () => {
    const id = Crypto.randomUUID();
    if (habitName.trim()) {
      addHabit({ id, name: habitName });
      router.back();
    }
  };

  return (
    <View className="flex-1 px-4 py-6">
      <Text className="m-4 text-xl text-defaultText">Name</Text>
      <TextInput
        className="p-4 mb-6 bg-white border rounded-lg border-defaultText text-text"
        placeholder="Enter habit name"
        placeholderTextColor="#9CA3AF"
        value={habitName}
        onChangeText={setHabitName}
      />

      <View className="flex flex-row justify-between mx-4">
        <Button label="Cancel" onPress={() => router.back()} />
        <Button label="Create" onPress={handleCreateHabit} />
      </View>
    </View>
  );
}
