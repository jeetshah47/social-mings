import { StyleSheet, View } from "react-native";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 140,
    width: 230,
    padding: 24,
    borderWidth: 1,
    borderColor: "#2B3538",
    borderRadius: 12,
    backgroundColor: "#141617",
    marginHorizontal: 8
  },
});
