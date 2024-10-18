import AsyncStorage from "@react-native-async-storage/async-storage";
import { Habit } from "@/types/habits";
import { HABITS_KEY } from "@/constants";

export default function useHabits() {
  const saveHabitDone = async (date: Date, id: string) => {
    try {
      const formattedDate = formatDateToDDMMYY(date);
      const data = JSON.parse(
        (await AsyncStorage.getItem(formattedDate)) ?? "[]"
      );
      data.push(id);
      await AsyncStorage.setItem(formattedDate, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const formatDateToDDMMYY = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}${month}${year}`;
  };

  const getHabitDone = async (date: Date, id: string): Promise<boolean> => {
    try {
      const formattedDate = formatDateToDDMMYY(date);
      const data = JSON.parse(
        (await AsyncStorage.getItem(formattedDate)) ?? "[]"
      );
      return data.includes(id);
    } catch (e) {
      console.log(e);
    }
    return false;
  };

  const addHabit = async (habit: Habit) => {
    try {
      const habits = await AsyncStorage.getItem(HABITS_KEY);
      const habitsArray = habits ? JSON.parse(habits) : [];
      habitsArray.push(habit);
      await AsyncStorage.setItem(HABITS_KEY, JSON.stringify(habitsArray));
    } catch (error) {
      console.log(error);
    }
  };

  const getHabits = async () => {
    try {
      const habits = await AsyncStorage.getItem(HABITS_KEY);
      return habits ? JSON.parse(habits) : [];
    } catch (error) {
      console.log(error);
    }
  };

  const removeHabit = async (habitId: string) => {
    try {
      const habits = await getHabits();
      const filteredHabits = habits.filter(
        (habit: Habit) => habit.id !== habitId
      );
      await AsyncStorage.setItem(HABITS_KEY, JSON.stringify(filteredHabits));
    } catch (error) {
      console.log(error);
    }
  };
  return { saveHabitDone, getHabitDone, addHabit, getHabits, removeHabit };
}
