import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import ParallaxScrollView from "@/components/base/ParallaxScrollView";
import DeleteModal from "@/components/common/Model/DeleteModel";
import { ThemedView } from "@/components/base/ThemedView";
import BaseModal from "@/components/common/Model/BaseModal";
import { ThemedPressable } from "@/components/base/ThemePressable";
import { ThemedText } from "@/components/base/ThemedText";
import { useState } from "react";
import SortModal from "@/components/common/Model/SortModal";
import FilterModal from "@/components/common/Model/FilterModal";

export default function TabTwoScreen() {
  const [showBox, setShowBox] = useState(false);
  return (
    <ThemedView style={styles.container}>
      <ThemedPressable
        onPress={() => setShowBox(!showBox)}
        style={styles.button}
      >
        <ThemedText>Delete Item</ThemedText>
      </ThemedPressable>
      {/* <DeleteModal show={showBox} /> */}
      {/* <SortModal show={showBox} title="Sort" options={[
        "Custom",
        "Relevance",
        "Most recent",
        "Lowest price",
        "Highest price",
      ]} /> */}
      <FilterModal show={showBox} title="Filter" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    paddingTop: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 12,
    backgroundColor: "#6B4EFF",
  },
});
