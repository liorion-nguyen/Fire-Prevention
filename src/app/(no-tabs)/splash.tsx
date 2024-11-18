import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'

const SplashScreen = () => {
  const router = useRouter()

  const onStart = () => {
    router.push('/(tabs)/video')
  }

  return (
    <SafeAreaView className="bg-white flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
      <View className="px-8 py-4 space-y-12">
        <Image source={images.splashImg} className="w-full" />
        <View>
          <Text className="text-3xl font-bold text-gray-800 text-center">Fire Safety Heroes</Text>
          <Text className="text-base font-normal text-gray-500 text-center">
            Trang bị kiến thức phòng cháy chữa cháy cho trẻ em
          </Text>
        </View>
        <CustomButton title="Bắt đầu" onPress={onStart} />
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen
