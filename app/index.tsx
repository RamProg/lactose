import Today from "@/screens/Today";
import type { Habit } from "@/types/habits";

const habits: Habit[] = [
  { id: "1", name: "Drink 8 glasses of water" },
  { id: "2", name: "Exercise for 30 minutes" },
  { id: "3", name: "Meditate for 10 minutes" },
];

export default function Page() {
  return (
    <Today habits={habits} />
  );
}
