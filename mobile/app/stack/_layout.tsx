/*
Stack - push page on top of current page
*/

import { Stack } from "expo-router";

export default function StackLayout() {
    return (
    <Stack>
        <Stack.Screen options={{ headerShown: false }}>
        </Stack.Screen>
    </Stack>
    ); 
}
