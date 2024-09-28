import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedPressable } from "@/components/ThemePressable";
import { Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.profileCover}>
        <ThemedText type="defaultSemiBold">My Details</ThemedText>
        <Image source={require("@/assets/images/userpic.png")} />
        <ThemedPressable style={styles.changeButton} darkColor="#C6C4FF">
          <ThemedText darkColor="#5538EE">Change</ThemedText>
        </ThemedPressable>
      </ThemedView>
      <ThemedView>
        <ThemedView>
            <ThemedText></ThemedText>
            <ThemedText></ThemedText>
        </ThemedView>
        <ThemedView>
            <ThemedText></ThemedText>
            <ThemedText></ThemedText>
        </ThemedView>
        <ThemedView>
            <ThemedText></ThemedText>
            <ThemedText></ThemedText>
        </ThemedView>
        <ThemedView>
            <ThemedText></ThemedText>
            <ThemedText></ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 24,
  },
  profileCover: {
    alignItems: "center",
    width: "100%",
    gap: 24,
    paddingVertical: 16
  },
  changeButton: {
    borderRadius: 48,
    paddingVertical: 4,
    paddingHorizontal: 16
  }
});
