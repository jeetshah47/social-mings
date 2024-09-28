import { ThemedText } from "@/components/base/ThemedText";
import { ThemedView } from "@/components/base/ThemedView";
import { ThemedPressable } from "@/components/base/ThemePressable";
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
      <ThemedView style={{ paddingTop: 24 }}>
        <ThemedView style={styles.fields}>
          <ThemedText>First Name</ThemedText>
          <ThemedText darkColor="#9990FF">Jeet</ThemedText>
        </ThemedView>
        <ThemedView style={styles.fields}>
          <ThemedText>Last Name</ThemedText>
          <ThemedText darkColor="#9990FF">Shah</ThemedText>
        </ThemedView>
        <ThemedView style={styles.fields}>
          <ThemedText>Location</ThemedText>
          <ThemedText darkColor="#9990FF">India</ThemedText>
        </ThemedView>
      </ThemedView>
        <ThemedView style={styles.fields}>
          <ThemedText>Email</ThemedText>
          <ThemedText darkColor="#9990FF">jeetshahajwa@gmail.com</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    // paddingHorizontal: 24,
  },
  profileCover: {
    alignItems: "center",
    width: "100%",
    gap: 24,
    paddingVertical: 16,
  },
  changeButton: {
    borderRadius: 48,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  fields: {
    paddingVertical: 22,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    borderColor: "#202325",
    borderTopWidth: 1,
    flexDirection: "row",
  },
});
