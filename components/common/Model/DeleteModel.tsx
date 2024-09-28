import { ThemedText } from "@/components/base/ThemedText";
import { ThemedView } from "@/components/base/ThemedView";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import BaseModal from "./BaseModal";

type DeleteModalProps = {
  show: boolean;
};

export default function DeleteModal({ show }: DeleteModalProps) {
  return (
    <BaseModal dheight={300} visible={show}>
      <ThemedView>
       
      </ThemedView>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
