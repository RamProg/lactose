import { View, Text } from "react-native";
import Habit from "./Habit";

interface Habit {
  id: string;
  name: string;
}

export default function HabitList({ habits }: { habits: Habit[] }) {
  return (
    <View className="flex-1 p-4">
      {habits.map((habit) => {
        return <Habit key={habit.id} habit={habit} />;
      })}
    </View>
  );
}
