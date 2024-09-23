import { YoutubeData } from "@/app/types/YoutubeInterface";
import { numbersToWords } from "@/app/utils/numbetToWord";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedInput } from "@/components/ThemeInput";
import { ThemedPressable } from "@/components/ThemePressable";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Accounts() {
  const [query, setQuery] = useState("");

  const [suggestion, setSuggestion] = useState<YoutubeData[]>([]);

  const [current, setCurrent] = useState("");

  const handleFetchData = async () => {
    // fetch(
    //   `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=${query}&key=${apiKey}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setSuggestion(data.items);
    //   })
    //   .catch((error) => console.error("Error:", error));
  };

  const handleNavigateNext =() => {
    
  } 

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Find Youtube Channel</ThemedText>
      <ThemedView>
        <ThemedText>Enter your channel username (Ex @my-user)</ThemedText>
        <ThemedInput value={query} onFocusOut={handleFetchData} onChangeText={(text) => setQuery(text)} />
        
        {suggestion.map((suggest) => (
          <ThemedPressable
            onPress={() => {
              if (current) {
                setCurrent("");
              } else setCurrent(suggest.id);
            }}
            key={suggest.id}
            style={[
              styles.channels,
              { borderColor: current === suggest.id ? "#6B4EFF" : "#282c2e" },
            ]}
          >
            <ThemedView>
              <Image
                source={{
                  uri: suggest.snippet.thumbnails.default.url,
                  width: 40,
                  height: 40,
                }}
              />
            </ThemedView>
            <ThemedView>
              <ThemedText type="defaultSemiBold">
                {suggest?.snippet?.title}
              </ThemedText>
              <ThemedText type="caption">
                {numbersToWords(parseInt(suggest.statistics.subscriberCount))}{" "}
                Subs | {numbersToWords(parseInt(suggest.statistics.videoCount))}{" "}
                Videos |{" "}
                {numbersToWords(parseInt(suggest.statistics.viewCount))} Views
              </ThemedText>
            </ThemedView>
          </ThemedPressable>
        ))}
        
      </ThemedView>
      <ThemedPressable
          style={styles.buttonContainer}
          disabled={query.length < 3}
          // onPress={handleFetchData}
        >
          <ThemedText>Continue</ThemedText>
        </ThemedPressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
    flex: 1
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
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignSelf: "center"
  },
  channels: {
    paddingVertical: 12,
    borderBottomWidth: 1.5,
    borderColor: "#282c2e",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
