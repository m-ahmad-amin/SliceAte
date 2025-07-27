import { Redirect, Tabs } from "expo-router";
import "../global.css";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import { View } from "react-native";

export default function TabLayout() {
  const { isSignedIn } = useAuth();
  if (!SignedIn) return <Redirect href="/(auth)" />;
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#69458F",
          borderTopWidth: 1,
          borderTopColor: "#E1E8ED",
          height: 50 + insets.bottom,
          paddingTop: 8,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ size, focused }) => (
            <View
              style={{
                borderRadius: 10,
              }}
            >
              <Feather name="home" size={size} color={focused ? '#fff' : '#ccc'} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ size, focused }) => (
            <Feather name="search" size={size} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          tabBarIcon: ({ size, focused }) => (
            <Feather name="shopping-cart" size={size} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "",
          tabBarIcon: ({ size, focused }) => (
            <Feather name="shopping-bag" size={size} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ size, focused }) => (
            <Feather name="user" size={size} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
    </Tabs>
  );
}
