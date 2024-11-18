import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useRouter } from 'expo-router'
import { IData } from '@/types/common'
import { BlurView } from 'expo-blur'
import { Bookmark, Play } from 'iconsax-react-native'

type SliderItemProps = {
  item: IData
  index: number
  scrollX: SharedValue<number>
}
const { width } = Dimensions.get('screen')
const imageWidth = width - 80
const SliderItem = ({ item, index, scrollX }: SliderItemProps) => {
  const router = useRouter()
  const rnAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-width * 0.25, 0, width * 0.25],
      Extrapolation.CLAMP,
    )
    const scale = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.82, 1, 0.82],
      Extrapolation.CLAMP,
    )
    return {
      transform: [
        {
          scale: scale,
        },
        {
          translateX: translateX,
        },
      ],
    }
  })
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/detail',
          params: {
            id: item.id,
          },
        })
      }
    >
      <Animated.View
        className="justify-center items-center"
        style={[{ width: width }, rnAnimatedStyle]}
      >
        <View className=" h-[200px] rounded-3xl overflow-hidden" style={{ width: imageWidth }}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={{ width: imageWidth }}
            className="h-[200px] justify-center items-center relative"
          >
            <BlurView
              intensity={32}
              tint="light"
              className="absolute h-16 px-6 py-2 bottom-0 left-0 right-0"
            >
              <View className="flex-row justify-between items-center">
                <Text className="font-semibold text-base text-white w-3/4">{item.title}</Text>
                <View className="bg-white p-2.5 rounded-full">
                  <Bookmark size={18} color="#1F2937" />
                </View>
              </View>
            </BlurView>
            <View className="rounded-full overflow-hidden">
              <BlurView className="p-2 rounded-full transform">
                <View className="bg-white p-2 rounded-full">
                  <Play variant="Bold" size={22} />
                </View>
              </BlurView>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default SliderItem
