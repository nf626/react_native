/* home layout */
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{
    headerStyle: {
      backgroundColor: "red",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }}>
    <Stack.Screen name="index" options={{ headerShown: false }}/>
    <Stack.Screen name="details" options={{ headerShown: false }}/>
  </Stack>
  );
}
