import {
  Image,
  StyleSheet,
  Platform,
  ImageBackground,
  View,
  Pressable,
} from "react-native";

import { ThemedText } from "@/components/base/ThemedText";
import { ThemedView } from "@/components/base/ThemedView";
import { ThemedPressable } from "@/components/base/ThemePressable";
import { router } from "expo-router";

export default function HomeScreen() {
  const singUpNavigate = () => {
    router.replace("/(core)/explore")
  }
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require("@/assets/images/back.png")}
    >
      <View style={styles.buttonContainer}>
        <ThemedView>
          <ThemedText type="title">Millions of Data!</ThemedText>
        </ThemedView>
        <View style={styles.flexButton}>
          <ThemedPressable
            style={styles.buttons}
            lightColor="#FFF"
            darkColor="#C6C4FF"
          >
            <ThemedText lightColor="" darkColor="#090A0A">Sign In</ThemedText>
          </ThemedPressable>
          <ThemedPressable
            onPress={singUpNavigate}
            lightColor="#6B4EFF"
            darkColor="#6B4EFF"
            style={styles.buttons}
          >
            <ThemedText>Sign Up</ThemedText>
          </ThemedPressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    gap: 8,
  },
  flexButton: {
    flexDirection: "row",
    width: "100%",
    gap: 16,
    paddingVertical:24
  },
  buttons: {
    borderRadius: 48,
    paddingVertical: 16,
    width: "50%",
    alignItems: "center"
  },
});
