import { View, Text, StyleSheet } from "react-native";
// Navigation - useRouter
import { useRouter } from "expo-router";
import { Button } from "@react-navigation/elements";

export default function Detail() {
    const router = useRouter();

    return (
        <>
        <View style={styles.container}>
            <Text>Details</Text>
        </View>
        <Button onPressIn={
            () => {
                router.navigate('/')
            }
        }>Go to home page</Button>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
