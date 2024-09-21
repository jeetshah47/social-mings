import Card from "@/components/common/Card";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import CustomDashCard from "./customcard";
import { useState } from "react";

export default function Dashboard() {
  const [card, setCard] = useState([
    "youtube",
    "twitter",
    "instagram",
    "facebook",
  ]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Good Morning</ThemedText>
      <ThemedText>{new Date().toDateString()}</ThemedText>
      <View style={styles.divider} />
      <ThemedView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {card.map((data) => (
            <CustomDashCard field={data} key={data} />
          ))}
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 24,
  },
  divider: {
    backgroundColor: "#202325",
    height: 1.5,
    width: "100%",
    marginVertical: 24,
  },
});
