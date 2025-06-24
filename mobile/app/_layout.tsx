/* Layout files in a directory are used to define
shared UI elements such as headers, tab bars
so that they persist between different routes. */

/* 
The _layout.tsx file acts as a wrapper for the pages within its directory.
It can contain navigation logic, such as Stack.Screen or Tabs.Screen configurations,
to manage how routes within that layout are presented and navigated between.
*/

/* Root layout */
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

