import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useCallback, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import ScreenWrapper from '@/components/ScreenWrapper'
import { images } from '@/constants'
import { ArrowLeft } from 'iconsax-react-native'
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router'
import { totalData } from '../data/data'
import HeaderComponent from '@/components/HeaderComponent'

const DetailPage = () => {
  const params = useLocalSearchParams()
  const router = useRouter()
  const { id } = params
  console.log('🚀 ~ DetailPage ~ id:', id)
  const [item] = useState(totalData.find((item) => item.id === Number(id)))
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false)
    }
  }, [])

  if (!item) {
    return <Redirect href={'(tabs)/video'} />
  }

  console.log('🚀 ~ DetailPage ~ item:', item)
  return (
    <View className="flex-1 bg-white">
      <ScreenWrapper>
        <HeaderComponent
          title={item.youtubeId ? 'Video chi tiết' : 'Bài học chi tiết'}
          iconLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <ArrowLeft size={24} color="black" />
            </TouchableOpacity>
          }
        />
        {item.youtubeId ? (
          <View className="h-60 w-full">
            <YoutubePlayer
              height={240}
              play={playing}
              videoId={item.youtubeId}
              onChangeState={onStateChange}
            />
          </View>
        ) : (
          <View>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground source={images.post1} className="h-80 w-full relative">
              {/* Blur Layout */}
              <View className="bg-gray-800 absolute top-0 left-0 right-0 bottom-0 opacity-30" />
            </ImageBackground>
          </View>
        )}
      </ScreenWrapper>
      <ScrollView className="flex-1 px-4 py-6 bg-background-300 -mt-4 rounded-t-3xl space-y-4">
        <View>
          <Text className="font-bold text-[20px] text-gray-800">{item?.title}</Text>
          {item.youtubeId && <Text className="text-xs text-gray-800">nguồn: Youtube</Text>}
        </View>
        <Text className="font-normal text-md text-gray-800">{item?.description}</Text>
        <View className="space-y-4">
          {item?.body.map((bodyElm) => (
            <View key={`${item.title}-${bodyElm.title}`} className="space-y-2">
              <Text className="font-semibold text-md text-gray-800">{bodyElm.title}</Text>
              {bodyElm.image && (
                <Image
                  source={bodyElm.image}
                  className="w-full h-52 rounded-lg"
                  resizeMode="cover"
                />
              )}
              <Text className="font-normal text-gray-800">{bodyElm.content}</Text>
            </View>
          ))}
        </View>
        <View className="h-12" />
      </ScrollView>
    </View>
  )
}

export default DetailPage
