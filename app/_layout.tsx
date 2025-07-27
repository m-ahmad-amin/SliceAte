import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Stack } from "expo-router";
import "./global.css";
import * as SystemUI from 'expo-system-ui';

SystemUI.setBackgroundColorAsync('#69458F');

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      </ClerkProvider>
  )
}
