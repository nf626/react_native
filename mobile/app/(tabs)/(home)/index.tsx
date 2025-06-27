/* Enrty point - Home page - Parent directory - '/' */
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    // View Container - flexbox
    <View style={styles.container}>
      <Text>Home page</Text>
      <Link href="/details">View details</Link>
      <Link href={"../link_button"}>Link button</Link>
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
