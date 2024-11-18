import { images } from '@/constants'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { Image, View } from 'react-native'

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(no-tabs)/splash')
      // router.replace('/(tabs)/video')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <View className="flex-1 bg-white justify-center items-center">
        <Image source={images.logo} className="w-[186px] h-[276px]" />
      </View>
    </>
  )
}
