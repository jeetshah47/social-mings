import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function SignInScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView  style={styles.titleContent}>
        <ThemedText type="title">Welcome Back</ThemedText>
        <ThemedText >Log in to your account</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24
  },
  titleContent: {
    gap: 8,
    paddingVertical: 10
  }
});
