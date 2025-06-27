/*
Tab - Creates Bottom navigation bar
*/

import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
            <Tabs.Screen name="(home)"
            options={{
                title: "Home",
            }}
            />
            <Tabs.Screen name="settings"
            options={{
                title: "Settings",
            }}
            />
            <Tabs.Screen name="links"
            options={{
                title: "Links",
                headerShown: false}}/>
        </Tabs>
    );
}
