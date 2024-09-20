import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedInput } from "@/components/ThemeInput";
import { ThemedPressable } from "@/components/ThemePressable";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect, useState } from "react";
import { Keyboard, StyleSheet, TextInput } from "react-native";

export default function Accounts() {
  const [query, setQuery] = useState("");

  const [suggestion, setSuggestion] = useState([]);

  const handleFetchData = async () => {
    const apiKey = "AIzaSyBpz6e9-1C3htpimLjRIbl-U7317ypFQug";
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=${query}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.items[0].snippet.title); // Channel title
        // console.log(data.items[0].statistics.subscriberCount); // Subscriber count
      })
      .catch((error) => console.error("Error:", error));
  };

  //   useEffect(() => {
  //     async function fetchData() {
  //       if (query.length > 4) {
  //         setTimeout(async () => {
  //           await handleFetchData();
  //         }, 5000);
  //       }
  //     }
  //     fetchData();
  //   }, [query]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Find Youtube Channel</ThemedText>
      <ThemedView>
        <ThemedText>Enter your channel username (Ex @my-user)</ThemedText>
        <ThemedInput value={query} onChangeText={(text) => setQuery(text)} />
        <ThemedPressable
          style={styles.buttonContainer}
          disabled={query.length < 3}
          onPress={handleFetchData}
          onTouchEnd={() => console.log("enedd")
          }
        >
          <ThemedText>Search</ThemedText>
        </ThemedPressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
  },

  textInput: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    fontSize: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    marginVertical: 10,
    backgroundColor: "#6B4EFF",
    borderRadius: 48,
    alignItems: "center",
    paddingVertical: 16,
  },
});
