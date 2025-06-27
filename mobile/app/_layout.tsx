/*
Layout files in a directory are used to define
shared UI elements such as headers, tab bars
so that they persist between different routes.
*/

/* 
The _layout.tsx file acts as a wrapper for the pages within its directory.
It can contain navigation logic, such as Stack.Screen or Tabs.Screen configurations,
to manage how routes within that layout are presented and navigated between.
*/

/*
_layout.tsx files are special files that are not pages themselves
but define how groups of routes inside a directory relate to each
other. If a directory of routes is arranged as a stack or tabs,
the layout route is where you would define that relationship
by using a stack navigator or tab navigator component. 
*/

/* Root layout */
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    </Stack>
  );
}

// example:
/*import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Stack />;
}*/
