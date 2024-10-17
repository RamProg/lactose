import { View } from "react-native";
import HabitList from "@/components/HabitList";
import type { Habit } from "@/types/habits";

interface TodayProps {
  habits: Habit[];
}

export default function Today({ habits }: TodayProps) {
  return (
    <View className="flex-1">
      <HabitList habits={habits} />
    </View>
  );
}
