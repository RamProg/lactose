import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header"

SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header />
      <Slot />
    </SafeAreaView>
  );
}
