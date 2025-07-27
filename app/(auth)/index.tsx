import { router } from "expo-router";
import { useRouter } from 'expo-router'
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import { useSSO } from "@clerk/clerk-expo";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";

export default function Index() {
const router = useRouter()

  const {startSSOFlow} = useSSO()

  const { isSignedIn } = useAuth();
  const {isLoading, handleAuth} = useAuthStore();

  if (isSignedIn) {
    return <Redirect href={'/(tabs)/home'} />
  }
  //  useEffect(() => {
  //   if (isSignedIn) {
  //     router.replace('/home');
  //   }
  // }, [isSignedIn]);

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-[#69458F]">
    <View className="flex-1 flex-col items-center pt-[40%]">
      <View className="w-[95%]">
      <Image source={require("../../assets/images/SliceAteLogoWNB.png")} className="w-full object-cover h-44"/>
      <TouchableOpacity style={{
          shadowColor: "#000",
          shadowOffset: {width:0, height: 1},
          shadowOpacity: 0.1,
          shadowRadius:2,
          elevation:2,
        }} onPress={() => {
        handleAuth("oauth_google", startSSOFlow)
      }} className="bg-[#f9bc04] flex flex-row rounded-full justify-center items-center w-[80%] self-center mt-3">
        <Image source={require("../../assets/images/google.png")} style={{ width: 25, height: 25 }}></Image>
        <Text className="font-bold text-lg text-black p-2"
        >
          Continue with Google
        </Text>
      </TouchableOpacity>
      

<TouchableOpacity style={{
          shadowColor: "#000",
          shadowOffset: {width:0, height: 1},
          shadowOpacity: 0.1,
          shadowRadius:2,
          elevation:2,
        }} onPress={() => {
        handleAuth("oauth_apple", startSSOFlow)
      }} className="bg-[#f9bc04] flex flex-row rounded-full justify-center items-center w-[80%] self-center mt-3">
        <Image source={require("../../assets/images/apple.png")} style={{ width: 25, height: 25 }} resizeMode="contain"></Image>
        <Text className="font-bold text-lg text-black p-2">
          Continue with Apple
        </Text>
      </TouchableOpacity>

      {isLoading ? (
        <View className="p-2">
        <ActivityIndicator size="small" color="#fff" />
        </View>
        ) : (<></>)}

        {/* <Text className="text-center leading-4 mt-6 px-2">
          By sigining up, you agree to our Terms, Privacy Policy, and Cookie Use.
        </Text> */}

      </View>
    </View>
    </SafeAreaView>
  );
}
