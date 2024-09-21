import { YoutubeData } from "@/app/types/YoutubeInterface";

const apiKey = process.env.EXPO_PUBLIC_YOUTUBE_KEY;

export const getYoutubeDataByField = async (
  field: "username" | "forHandle" | "id",
  query: string
): Promise<{items: YoutubeData[]}> => {
    console.log(apiKey);
    
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&${field}=${query}&key=${apiKey}`
  );
  return response.json();
};
