import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import { More } from 'iconsax-react-native'
import PopularCard from '@/components/PopularCard'
import Card from '@/components/Card'
import { lessonData } from '../data/data'

const Lesson = () => {
  return (
    <View className="bg-white flex-1">
      <ScrollView>
        <ScreenWrapper>
          <Header title="Bài học" />
          {/* Popular */}
          <View className="my-8 pl-8 space-y-4">
            <Text className="text-[20px] font-bold text-gray-800">Phổ biến nhất</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {lessonData.map((data) => (
                <View key={data.id}>
                  <PopularCard data={data} />
                </View>
              ))}
            </ScrollView>
          </View>
          <View className="px-8 space-y-6">
            <View className="flex-row justify-between items-center">
              <Text className="text-[20px] font-bold text-gray-800">Bài giảng</Text>
            </View>
            <View className="space-y-4">
              {lessonData.map((data) => (
                <View key={data.id}>
                  <Card data={data} />
                </View>
              ))}
            </View>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </View>
  )
}

export default Lesson
