import LinearProgress from "@/components/LinearProgress";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedPressable } from "@/components/ThemePressable";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text } from "react-native";

export default function GoalScreen() {
  const router = useRouter();
  const options = ["Youtube", "Instagram", "Facebook", "Twitter"];
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);

  const pushOptions = (option: string) => {
    if (currentOptions.includes(option)) {
      const cloneOptions = [...currentOptions];
      setCurrentOptions([...cloneOptions.filter((op) => op !== option)]);
    } else {
      const cloneOptions = [...currentOptions];
      cloneOptions.push(option);
      setCurrentOptions([...cloneOptions]);
    }
    console.log(currentOptions);
  };

  const handleNavigate = () => {
    router.replace("/(core)/setup/accounts");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.mainContainer}>
        <LinearProgress progress={20} />
        <ThemedView style={{ paddingVertical: 20 }}>
          <ThemedText type="title">Tell us your goal</ThemedText>
          <ThemedText type="default">
            We will show stats as per selected social platform
          </ThemedText>
        </ThemedView>
        {options.map((option) => (
          <ThemedPressable
            key={option}
            onPress={() => pushOptions(option)}
            style={[
              styles.optionButton,
              currentOptions.includes(option) ? styles.focused : undefined,
            ]}
          >
            <ThemedText
              style={{
                color: currentOptions.includes(option) ? "#6B4EFF" : "#fff",
              }}
            >
              {option}
            </ThemedText>
          </ThemedPressable>
        ))}
        <ThemedView style={{ marginTop: 20 }}>
          <ThemedPressable
            disabled={currentOptions.length === 0}
            style={styles.continue}
            onPress={handleNavigate}
          >
            <ThemedText>Continue</ThemedText>
          </ThemedPressable>
        </ThemedView>
      </ThemedView>

      <Image
        source={require("@/assets/images/bottom.png")}
        style={styles.bottomImage}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    borderWidth: 1,
  },
  mainContainer: {
    marginHorizontal: 24,
    gap: 16,
  },
  bottomImage: {
    width: "100%",
    height: "60%",
    position: "absolute",
    zIndex: -1,
    alignSelf: "flex-end",
    bottom: 0,
  },
  optionButton: {
    borderRadius: 48,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderColor: "#333435",
    minWidth: "30%",
  },
  focused: {
    backgroundColor: "#E7E7FF",
    color: "#6B4EFF",
  },
  continue: {
    backgroundColor: "#6B4EFF",
    alignItems: "center",
    padding: 16,
    borderRadius: 48,
  },
});
