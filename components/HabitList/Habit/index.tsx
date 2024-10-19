import { View, Text, Switch } from "react-native";
import { useEffect, useState } from "react";
import useHabits from "@/hooks/useHabits";

interface Habit {
  id: string;
  name: string;
}

export default function Habit({ habit }: { habit: Habit }) {
  const [isDone, setIsDone] = useState<boolean>(false);

  const { saveHabitDone, getHabitDone } = useHabits();
  const switchToTrue = () => {
    setIsDone(true);
    console.log(habit.id);
    saveHabitDone(new Date(), habit.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedValue = await getHabitDone(new Date(), habit.id);
      setIsDone(storedValue);
    };

    fetchData();
  }, [habit.id, getHabitDone]);

  return (
    <View className="flex flex-row items-center justify-between px-4 m-4 rounded-full h-14 bg-positiveBackground">
      <Text className="text-xl">{habit.name}</Text>
      <Switch
        value={isDone}
        onValueChange={switchToTrue}
        disabled={isDone}
        thumbColor={isDone ? "#98FF98" : undefined}
        trackColor={{ true: "#8A9A5B" }}
      />
    </View>
  );
}
