import { ThemedText } from "@/components/base/ThemedText";
import { ThemedView } from "@/components/base/ThemedView";
import { ThemedPressable } from "@/components/base/ThemePressable";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TouchableWithoutFeedback,
} from "react-native";

export default function SignInScreen() {
  const [user, setUser] = useState({ phoneno: "" });
  const colorScheme = useColorScheme();
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef<TextInput>(null);

  const handleFocus = () => {
    if (ref.current?.isFocused()) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContent}>
          <ThemedText type="title">Welcome Back</ThemedText>
          <ThemedText>Log in to your account</ThemedText>
        </ThemedView>
        <ThemedView>
          <TextInput
            value={user.phoneno}
            onChangeText={(text) => setUser({ phoneno: text })}
            keyboardType="number-pad"
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleFocus}
            placeholder="Please Enter your number"
            style={{
              ...styles.textInput,
              color: colorScheme === "dark" ? "#fff" : "#000",
              borderColor: !isFocus ? "#979C9E" : "#6B4EFF",
            }}
            maxLength={10}
          />
        </ThemedView>
        <ThemedText type="caption" darkColor="#979C9E" lightColor="#6C7072">
          You will receive an SMS verification that may apply message and data
          rates.
        </ThemedText>
        <ThemedPressable style={styles.buttonContainer}>
          <Text style={{color: "#fff"}}>Log In</Text>
        </ThemedPressable>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  titleContent: {
    gap: 10,
    paddingVertical: 10,
  },
  textInput: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    fontSize: 16,
    marginVertical:8
  },
  buttonContainer: {
    marginVertical: 70,
    backgroundColor: "#6B4EFF",
    borderRadius: 48,
    alignItems: "center",
    paddingVertical: 16
  }
});
