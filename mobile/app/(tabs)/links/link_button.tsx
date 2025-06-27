/*
Link and Button
Link component for navigating between pages,
where the href is the same route you would use in router.navigate
*/

import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function LinkButton() {
    return (
        <View style={styles.container}>
            {/* <Link href={"/"}>Home page</Link> */}

            <Link href="/" asChild>
            <Pressable>
                <Text>Home page</Text>
            </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
