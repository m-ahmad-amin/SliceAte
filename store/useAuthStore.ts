import { create } from "zustand";
import { ToastAndroid } from "react-native";
import { useRouter } from 'expo-router'
const router = useRouter()

type AuthStore = {
  isLoading: boolean;
  handleAuth: (strategy: "oauth_google" | "oauth_apple", startSSOFlow: Function) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLoading: false,
  handleAuth: async (strategy, startSSOFlow) => {
    set({ isLoading: true });
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        ToastAndroid.show(`Sign in Success`, ToastAndroid.SHORT);
        router.replace('/(tabs)/home');
      }

      
      
    } catch (err) {
      const provider = strategy === "oauth_google" ? "Google" : "Apple";
      ToastAndroid.show(`Failed to sign in with ${provider}. Please try again.`, ToastAndroid.SHORT);
    } finally {
      set({ isLoading: false });
    }
  }
}));
