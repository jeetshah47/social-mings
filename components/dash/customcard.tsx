import { getYoutubeDataByField } from "@/app/apis/youtube/youtube.api";
import { numbersToWords } from "@/app/utils/numbetToWord";
import Card from "@/components/common/Card";
import { ThemedText } from "@/components/base/ThemedText";
import { ThemedView } from "@/components/base/ThemedView";
import { useEffect, useState } from "react";
import { Image, ImageSourcePropType } from "react-native";

type DashCardProps = {
  field: string;
};

interface DataProps {
  icon: ImageSourcePropType;
  title: string;
  baseData: string | number;
  key: string;
  value: string;
}

export default function CustomDashCard({ field }: DashCardProps) {
  const [data, setData] = useState<DataProps>({
    baseData: "100K",
    icon: require("@/assets/images/youtube.png"),
    key: "Subscribers",
    title: "Youtube",
    value: "10",
  });

  const handleCallApi = async () => {
    if (field === "youtube") {
      try {
        const result = await getYoutubeDataByField("forHandle", "breakingbad");
        console.log("und",result);
        setData({
          title: "Youtube",
          icon: require("@/assets/images/youtube.png"),
          baseData: numbersToWords(
            Number(result.items[0].statistics.subscriberCount)
          ),
          key: "Subscribers",
          value: numbersToWords(
            Number(result.items[0].statistics.subscriberCount) / 100
          ),
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    // handleCallApi();
  }, []);

  return (
    <Card>
      <ThemedView
        lightColor="#E5E6EA"
        darkColor="#141617"
        style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
      >
        <Image source={data.icon} style={{ width: 28, height: 28 }} />
        <ThemedText type="defaultSemiBold">{data.title}</ThemedText>
      </ThemedView>
      <ThemedView
        style={{ paddingTop: 18 }}
        lightColor="#E5E6EA"
        darkColor="#141617"
      >
        <ThemedText type="subtitle">{data?.baseData}</ThemedText>
        <ThemedView
          style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
          lightColor="#E5E6EA"
          darkColor="#141617"
        >
          <ThemedText>{data?.key}</ThemedText>
          <ThemedText darkColor="#6B4EFF">{data?.value} %</ThemedText>
        </ThemedView>
      </ThemedView>
    </Card>
  );
}
