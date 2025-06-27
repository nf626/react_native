/*
Slot - layout without a navigator.
This is helpful for adding a header or footer around the
current route, or for displaying a modal over any route
inside a directory.
In this case, you can use the Slot component, which serves
as a placeholder for the current child route.
*/

import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <>
      {/* <Header/>
      <Slot />
      <Footer /> */}
    </>
  );
}
