import { View, Text, Switch } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Habit {
  id: string;
  name: string;
}

export default function Habit({ habit }: { habit: Habit }) {
  const [isDone, setIsDone] = useState<boolean>(false);
  const toggleSwitch = () => setIsDone(true);

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem(habit.name, value);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem(habit.name);
        setIsDone(value === "true");
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    storeData(isDone.toString());
    console.log(isDone);
  }, [isDone]);

  return (
    <View className="flex flex-row items-center justify-between px-4 m-4 rounded-full h-14 bg-positiveBackground">
      <Text className="text-xl">{habit.name}</Text>
      <Switch value={isDone} onValueChange={toggleSwitch} disabled={isDone} />
    </View>
  );
}
