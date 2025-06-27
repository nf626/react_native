/*
If you see square brackets in a file or directory name, you are looking at a dynamic route.
The name of the route includes a parameter that can be used when rendering the page.
The parameter could be either in a directory name or a file name.
*/

import { Link, router, Stack } from "expo-router";
import { View, Pressable, Text } from "react-native";

const dynamic = {
    id: "dynamic1",
};

export default function DynamicRoute() {
    return (
        <View>
            {/* <Link href="/links/dynamic1">
            View links (id dynamic1)
            </Link>
            <Link href={{ 
                pathname: "/links/[id]",
                params: { id: "dynamic1" }
                }}
            >
                View links (pathname and params)
            </Link> */}
            <Stack.Screen options={{
                title: "dynamic route",
            }}/>
            <Pressable onPress={() =>
                router.navigate({
                    pathname: "/links/[id]",
                    params: { id: "dynamic1" }
                })
            }
            >
            <Text>Dynamic Route</Text>
            </Pressable>
        </View>
    );
}
