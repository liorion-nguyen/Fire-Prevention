import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import SlideImage from '@/components/slider'
import { videoData } from '../data/data'
import { More } from 'iconsax-react-native'
import Card from '@/components/Card'

const Video = () => {
  return (
    <View className="bg-white flex-1">
      <ScrollView>
        <ScreenWrapper>
          <Header title="Video" />
          <View className="">
            <View className="mb-8">
              <Text className="text-sm font-semibold text-gray-500 text-center">Phổ biến</Text>
              <Text className="text-center text-lg font-semibold text-gray-800">Trong tháng</Text>
            </View>
            <SlideImage itemList={videoData} />
          </View>
          {/* List Video */}
          <View className="px-8 space-y-6">
            <View className="flex-row justify-between items-center">
              <Text className="text-[20px] font-bold text-gray-800">Hướng dẫn phòng cháy</Text>
              <More color="#1F2937" />
            </View>
            <View className="space-y-4">
              {videoData.map((data) => (
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

export default Video
