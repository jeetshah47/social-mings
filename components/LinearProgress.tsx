import { StyleSheet, View } from "react-native";

export type LinearProgressProps = {
  progress: number;
};

export default function LinearProgress({progress}: LinearProgressProps) {
  return (
    <View style={styles.line}>
      <View style={{...styles.overlap, width: `${progress}%`}} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#202325",
    borderRadius: 100,
    height: 5,
  },
  overlap: {
    height: 5,
    backgroundColor: "#6B4EFF",
  },
});
