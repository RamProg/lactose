import { FlatList, View } from "react-native";
import Habit from "./Habit";

interface Habit {
  id: string;
  name: string;
}

export default function HabitList({ habits }: { habits: Habit[] }) {
  return (
    <View className="flex-1">
      <FlatList
        data={habits}
        renderItem={({ item }) => <Habit habit={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
