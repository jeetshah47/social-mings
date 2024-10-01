import { ScrollView, StyleSheet } from "react-native";
import BaseModal from "./BaseModal";
import { ThemedView } from "@/components/base/ThemedView";
import { ThemedText } from "@/components/base/ThemedText";
import { Feather } from "@expo/vector-icons";
type SortModalProps = {
  show: boolean;
  title: string;
  options: string[];
};

export default function SortModal({ show, title, options }: SortModalProps) {
  return (
    <BaseModal dheight={370} visible={show}>
      <ThemedView darkColor="#202325" style={style.container}>
        <ThemedText type="subtitle">{title ? title : "Sort"}</ThemedText>
        <ScrollView>
          {options.map((option) => (
            <ThemedView darkColor="#202325" style={style.box}>
              <ThemedText style={style.sortItems} key={option}>
                {option}
              </ThemedText>
              <Feather name="check" color={"#6B4EFF"} size={24} />
            </ThemedView>
          ))}
        </ScrollView>
      </ThemedView>
    </BaseModal>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },
  sortItems: {},
  box: {
    flexDirection: "row",
    paddingVertical: 12,
    justifyContent: "space-between"
  },
});
