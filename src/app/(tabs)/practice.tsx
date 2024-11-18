import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'

const Practice = () => {
  const router = useRouter()

  const onNavigatePractice = (level: string) => {
    router.push({
      pathname: '/quizz-screen',
      params: {
        level: level,
      },
    })
  }
  return (
    <View className="bg-white flex-1">
      <ScrollView>
        <ScreenWrapper>
          <Header title="Bài tập" />
          <View className="px-8">
            <Image source={images.practiceimg} className="w-full h-[380px]" />
            <View className="mt-10 space-y-4">
              <Text className="font-bold text-[20px]">Chọn cấp độ</Text>
              <View className="space-y-4">
                <CustomButton
                  title="Cấp độ 1"
                  containerStyle="min-h-[48px] bg-green-500"
                  onPress={() => onNavigatePractice('easy')}
                />
                <CustomButton
                  title="Cấp độ 2"
                  containerStyle="min-h-[48px] bg-orange-500"
                  onPress={() => onNavigatePractice('medium')}
                />
                <CustomButton
                  title="Cấp độ 3"
                  containerStyle="min-h-[48px] bg-red-500"
                  onPress={() => onNavigatePractice('hard')}
                />
              </View>
            </View>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </View>
  )
}

export default Practice
