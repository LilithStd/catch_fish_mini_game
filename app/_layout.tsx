import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    mainFont: require('../assets/fonts/RubikDirt-Regular.ttf'),
    cartoonLargeFont: require('../assets/fonts/BungeeSpice-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="game" options={{ headerShown: false }} />
        <Stack.Screen name="encyclopedia" options={{ headerShown: false }} />
        <Stack.Screen name="location/index" options={{ headerShown: false }} />
        <Stack.Screen name="location/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="location/[placeId]" options={{ headerShown: false }} />
        <Stack.Screen name="result" options={{ headerShown: false }} />
      </Stack>

    </SafeAreaProvider>
  );
}
