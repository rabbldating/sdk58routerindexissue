import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function LayoutContextful() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}
