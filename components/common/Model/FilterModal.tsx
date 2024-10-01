import { ThemedView } from "@/components/base/ThemedView";
import BaseModal from "./BaseModal";
import { ThemedText } from "@/components/base/ThemedText";

type FilterModalProps = {
  show: boolean;
  title?: string;
};

export default function FilterModal({ show, title }: FilterModalProps) {
  return (
    <BaseModal dheight={540} visible={show}>
      <ThemedView>
        <ThemedText type="section">{title ? title : "Filter"}</ThemedText>
      </ThemedView>
    </BaseModal>
  );
}
