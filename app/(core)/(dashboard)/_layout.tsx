import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#6C7072",
        tabBarBackground: () => <View style={{backgroundColor: "#202325", flex: 1}} />
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons color={color} size={size} name="home-outline" />
          ),
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons color={color} size={size} name="person-outline" />
          ),
        }}
        name="profile"
      />
    </Tabs>
  );
}
