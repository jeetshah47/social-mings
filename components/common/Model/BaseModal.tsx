import { ThemedText } from "@/components/base/ThemedText";
import { ThemedView } from "@/components/base/ThemedView";
import { ThemedPressable } from "@/components/base/ThemePressable";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
} from "react-native";

type BaseModalProps = {
  children?: React.ReactNode;
  visible: boolean;
  dheight: number;
};

export default function BaseModal({ children, visible, dheight }: BaseModalProps) {
  const springAnim = useRef(new Animated.Value(0)).current;

  const popOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(springAnim, {
      toValue: dheight,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };

  const popIn = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(springAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (visible) {
      popOut();
    } else {
      popIn();
    }
  }, [visible]);

  return (
    <Animated.View style={[styles.container, { minHeight: springAnim }]}>
      {/* <ThemedView style={styles.container}> */}
      <ThemedPressable style={styles.downGesture} onPress={popIn} />
      <ThemedView style={styles.modal}>{children}</ThemedView>
      {/* </ThemedView> */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202325",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    // minHeight: 300,
    position: "absolute",
    bottom: 0,
    height: 0,
    width: "100%",
  },
  modal: {
    padding: 24,
    backgroundColor: "#202325",
  },
  downGesture: {
    width: 56,
    height: 5,
    backgroundColor: "#6C7072",
    marginVertical: 11,
    borderRadius: 100,
  },
});
