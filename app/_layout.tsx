import { Slot, SplashScreen } from "expo-router";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <Text className="text-4xl text-center text-defaultText">Today</Text>
      <Slot />
      <Text className="text-defaultText">Footer</Text>
    </SafeAreaView>
  );
}
