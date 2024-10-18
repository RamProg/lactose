import Today from "@/screens/Today";
import useHabits from "@/hooks/useHabits";
import { useEffect } from "react";
import { useState } from "react";

export default function Page() {
  const [habits, setHabits] = useState([]);
  const { getHabits } = useHabits();

  useEffect(() => {
    const fetchHabits = async () => {
      const fetchedHabits = await getHabits();
      setHabits(fetchedHabits);
    };

    fetchHabits();
  }, [getHabits]);

  return <Today habits={habits} />;
}
