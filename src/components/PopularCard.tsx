import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IData } from '@/types/common'
import { useRouter } from 'expo-router'

type Props = {
  data: IData
}

const PopularCard = ({ data }: Props) => {
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
      <View className="flex-col space-y-4 w-40 mr-4">
        <Image source={data.image} className="w-40 h-40 rounded-3xl" />
        <Text className="text-base font-semibold" ellipsizeMode="tail" numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularCard
