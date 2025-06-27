/* links layout */
import { Stack } from "expo-router";

export default function DynamicLayout() {
  return (
  <Stack screenOptions={{
    headerStyle: {
      backgroundColor: "blue",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }}>
    <Stack.Screen name="[id]" options={{ headerShown: false }}/>
  </Stack>
  );
}
