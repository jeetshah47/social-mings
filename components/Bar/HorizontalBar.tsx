import { StyleSheet, View } from "react-native";
import { ChartProps } from "./types/ChartProps";

export default function HorizontalBar({ width, color }: ChartProps) {
  return (
    <View
      style={{ ...styles.bar, width: `${width}%`, backgroundColor: color }}
    />
  );
}

const styles = StyleSheet.create({
  bar: {
    borderRadius: 4,
    height: 12,
  },
});
