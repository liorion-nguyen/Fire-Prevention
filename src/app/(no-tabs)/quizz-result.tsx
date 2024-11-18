import { Platform, StatusBar, TouchableOpacity, Image, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useLocalSearchParams, useRouter } from 'expo-router'

enum EResultType {
  GOOD,
  BAD,
}

const RETURN_RESULT = {
  [EResultType.GOOD]: {
    title: 'Xin chúc mừng!',
    description: 'Bạn đã trả lời đúng',
    color: '#16A34A',
    logo: images.good_logo,
  },
  [EResultType.BAD]: {
    title: 'Rất tiếc!',
    description: 'Bạn không trả lời đúng câu nào',
    color: '#EF4444',
    logo: images.bad_logo,
  },
}

const QuizzResult = () => {
  const params = useLocalSearchParams()
  const { point, length } = params
  const router = useRouter()
  const result = Number(point) > Number(length) / 2 ? EResultType.GOOD : EResultType.BAD

  return (
    <View className={'flex-1 bg-white justify-center items-center px-12 space-y-3'}>
      {Platform.OS == 'android' && <StatusBar barStyle="light-content" />}
      <Image source={RETURN_RESULT[result].logo} alt="logo" />
      <View className={'space-y-1'}>
        <Text className="text-center font-bold text-3xl text-gray-800">
          {RETURN_RESULT[result].title}
        </Text>
        <Text className="text-center text-sm text-gray-800">
          {RETURN_RESULT[result].description}
        </Text>
      </View>
      <View className="my-2">
        <Text
          className="text-center font-bold text-3xl"
          style={{ color: RETURN_RESULT[result].color }}
        >
          {point}/{length}
        </Text>
      </View>
      <TouchableOpacity onPress={() => router.push('/practice')}>
        <View className={'bg-primary py-2.5 px-8 rounded-xl'}>
          <Text className="text-white font-semibold text-base">Tiếp tục học</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default QuizzResult
