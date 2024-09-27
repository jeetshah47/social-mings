import Card from "@/components/common/Card";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import CustomDashCard from "./customcard";
import { useState } from "react";
import ContentReached from "./charts/content";

export default function Dashboard() {
  const [card, setCard] = useState([
    "youtube",
    "twitter",
    "instagram",
    "facebook",
  ]);

  return (
    <ScrollView style={styles.container}>
    <ThemedView >
      <ThemedText type="title">Good Morning</ThemedText>
      <ThemedText>{new Date().toDateString()}</ThemedText>
      <View style={styles.divider}  />
      <ThemedText type="subtitle" style={{paddingBottom: 15}}>Your Daily Stats</ThemedText>
      <ThemedView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {card.map((data) => (
            <CustomDashCard field={data} key={data} />
          ))}
        </ScrollView>
        <ThemedView style={{paddingVertical: 16, gap: 16}}>
          <ThemedText type="subtitle">Statistics</ThemedText>
          <ContentReached />
        </ThemedView>
      </ThemedView>
    </ThemedView>
    </ScrollView>
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
