import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "goal",
        }}
      />
      <Stack.Screen
        name="accounts"
        options={{
          title: "goal",
        }}
      />
    </Stack>
  );
}
