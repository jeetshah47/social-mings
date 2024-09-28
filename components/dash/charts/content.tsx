import HorizontalBar from "@/components/Bar/HorizontalBar";
import ChartCard from "@/components/common/ChartCard";
import { ThemedText } from "@/components/base/ThemedText";
import { ThemedView } from "@/components/base/ThemedView";
import { StyleSheet, View } from "react-native";

export default function ContentReached() {
  const countries = ["USA", "India", "Canada", "Australia"];
  const percentages = [
    {
      color: "#4A3AFF",
      value: 100,
      country: "USA",
    },
    {
      color: "#E0C6FD",
      value: 75,
      country: "India",
    },
    {
      color: "#962DFF",
      value: 50,
      country: "Canada",
    },
    {
      color: "#C6D2FD",
      value: 25,
      country: "Australia",
    },
  ];
  return (
    <ThemedView style={styles.container}>
      <ChartCard width={"100%"} height={"auto"}>
        <View style={{ paddingBottom: 24 }}>
          <ThemedText darkColor="#9990FF" lightColor="#1E1B39" type="subtitle">Popular Countries</ThemedText>
        </View>
        <View style={styles.contries}>
          {percentages.map((cont) => (
            <View key={cont.country} style={{ flexDirection: "row", alignItems: "center" }}>
              <ThemedText key={cont.country} style={{ width: "25%" }}>
                {cont.country}
              </ThemedText>
              <View style={{ flex: 1 }}>
                <HorizontalBar
                  color={cont.color}
                  key={cont.value}
                  width={cont.value}
                />
              </View>
            </View>
          ))}
          <View style={{alignItems: "flex-end"}}>
            <View style={styles.scale}>
              <ThemedText>0%</ThemedText>
              <ThemedText>50%</ThemedText>
              <ThemedText>100%</ThemedText>
            </View>
          </View>
        </View>
      </ChartCard>
    </ThemedView>
  );
}

{
  /* <View style={{ flex: 1 , gap: 30, paddingTop: 5}}>
            {percentages.map((percent) => (
              <HorizontalBar
                color={percent.color}
                key={percent.value}
                width={percent.value}
              />
            ))}
          </View> */
}

const styles = StyleSheet.create({
  container: {},
  contries: {
    // flexDirection: "row",
    gap: 20,
    // alignItems: "center"
  },
  scale: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
