import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="signin"
        options={{
          title: 'Home',
        }}
      />
    </Stack>
  );
}
