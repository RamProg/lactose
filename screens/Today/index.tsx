import { View } from "react-native";
import HabitList from "@/components/HabitList";
import type { Habit } from "@/types/habits";
import Navigator from "@/components/Navigator";

interface TodayProps {
  habits: Habit[];
}

export default function Today({ habits }: TodayProps) {
  return (
    <View className="flex-1 bg-transparent">
      <HabitList habits={habits} />
      <Navigator />
    </View>
  );
}
