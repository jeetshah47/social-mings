import { ThemedText } from "@/components/base/ThemedText";
import { ThemedView } from "@/components/base/ThemedView";
import { useState } from "react";
import { StyleSheet } from "react-native";
import BaseModal from "./BaseModal";
import { ThemedPressable } from "@/components/base/ThemePressable";

type DeleteModalProps = {
  show: boolean;
  description?: string;
  title?: string;
};

export default function DeleteModal({
  show,
  description,
  title,
}: DeleteModalProps) {
  return (
    <BaseModal dheight={300} visible={show}>
      <ThemedView style={styles.container} darkColor="#202325">
        <ThemedText type="subtitle">{title ? title : "Remove Item"}</ThemedText>
        <ThemedText type="defaultSemiBold">{title ? title : "Are you sure you want to remove this item ?"}</ThemedText>
        <ThemedView darkColor="#202325" style={{width: "100%", paddingTop: 16, }}>
        <ThemedPressable style={styles.removeButton} darkColor="#6B4EFF">
          <ThemedText>Remove Item</ThemedText>
        </ThemedPressable>
        <ThemedPressable style={styles.removeButton} darkColor="#202325">
          <ThemedText>Cancel</ThemedText>
        </ThemedPressable>
        </ThemedView>
      </ThemedView>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  removeButton: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 48
  }
});
