import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export default function customNotFound() {
    return (
      <View className='flex-1 justify-center items-center bg-[#69458F]'>
        <ActivityIndicator size="small" color="#fff"></ActivityIndicator>
      </View>
    )
  }
