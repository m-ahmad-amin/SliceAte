import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, StatusBar, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useClerk } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import Pizza from '../../components/pizza';
import Burger from '../../components/burger';
import Drink from '../../components/drink';
import Others from '../../components/others';

const TopTabs = createMaterialTopTabNavigator();

export default function Home()  {
   
  const router = useRouter()

  // const { signOut } = useClerk()
  // const handleSignOut = async () => {
  //   try {
  //     await signOut()
  //     // Redirect to your desired page
  //     router.replace('/(auth)')
  //   } catch (err) {
  //     console.error(JSON.stringify(err, null, 2))
  //   }
  // }
    return (
      <SafeAreaView className='flex-1 px-2'>
        <StatusBar backgroundColor="#69458F" barStyle="light-content" />

      <Text className='font-extrabold text-xl mt-2 text-center p-2'>Explore</Text>

      <TopTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#69458F',
        tabBarLabelStyle: { fontSize: 14, fontWeight:700 },
        tabBarStyle: { backgroundColor: 'transparent' },
        tabBarIndicatorStyle: {
          backgroundColor: '#69458F',
        }
      }}
    >
      <TopTabs.Screen name="Pizza" component={Pizza} />
      <TopTabs.Screen name="Burger" component={Burger} />
      <TopTabs.Screen name="Drink" component={Drink} />
      <TopTabs.Screen name="Others" component={Others} />
    </TopTabs.Navigator>
      
      </SafeAreaView>
    )
}