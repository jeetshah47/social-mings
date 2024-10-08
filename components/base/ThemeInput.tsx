import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRef, useState } from "react";

export type ThemedInputProps = TextInputProps & {
  onFocusOut?: () => void;
};

export function ThemedInput({
  style,
  onFocusOut,
  ...otherProps
}: ThemedInputProps) {
  const colorScheme = useColorScheme();
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef<TextInput>(null);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    console.log(ref.current?.isFocused());

    if (ref.current?.isFocused()) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
      onFocusOut && onFocusOut();
    }
  };

  return (
    <TextInput
      onBlur={handleFocus}
      onFocus={handleFocus}
      ref={ref}
      style={{
        ...styles.textInput,
        color: colorScheme === "dark" ? "#fff" : "#000",
        borderColor: !isFocus ? "#979C9E" : "#6B4EFF",
      }}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    fontSize: 16,
    marginVertical: 8,
  },
});
