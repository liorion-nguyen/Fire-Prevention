import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { More, Play } from 'iconsax-react-native'
import { IData } from '@/types/common'
import { useRouter } from 'expo-router'

type Props = {
  data: IData
}

const Card = ({ data }: Props) => {
  const router = useRouter()
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/detail',
          params: {
            id: data.id,
          },
        })
      }
    >
      <View className="flex-row justify-between items-center space-x-4">
        <View className="flex-row items-center gap-4 flex-1">
          <Image source={data.image} className="w-24 h-16 rounded-2xl" />
          <View className="flex-1">
            <Text
              className="text-base font-semibold text-gray-800"
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {data.title}
            </Text>
          </View>
        </View>
        <View className="p-2 bg-gray-100 rounded-full">
          {data.youtubeId ? <Play size={22} color="#1F2937" /> : <More size={22} color="#1F2937" />}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card
