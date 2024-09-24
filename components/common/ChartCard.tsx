import { DimensionValue, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";

type ChartCardProps = {
  width: DimensionValue | undefined;
  height: DimensionValue | undefined;
  children: React.ReactNode;
};

export default function ChartCard({ width, height, children }: ChartCardProps) {
  return (
    <ThemedView
      lightColor="#ffffff"
      darkColor="#141617"
      style={[styles.cardContainer, { width: width, height: height }]}
    >
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 24,
    borderWidth: 1,
    borderColor: "#2B3538",
    borderRadius: 20,
  },
});
