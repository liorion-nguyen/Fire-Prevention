import { Dimensions, View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { getRandomArray } from '@/utils/function'
import TextBox, { EStatus } from '@/components/TextBox'
import { quizzData } from '../data/quizz'
import ScreenWrapper from '@/components/ScreenWrapper'
import HeaderComponent from '@/components/HeaderComponent'
import { ArrowLeft } from 'iconsax-react-native'
import { useRouter } from 'expo-router'

const show: { [key: string]: string } = {
  easy: 'Dễ',
  medium: 'Trung bình',
  hard: 'Khó',
}

const QuizzScreen = () => {
  const router = useRouter()
  const [status, setStatus] = useState<EStatus[]>([EStatus.NORMAL, EStatus.NORMAL, EStatus.NORMAL])
  const [next, setNext] = useState(false)
  const [point, setPoint] = useState(0)

  const route = useRoute<any>()
  const navigation = useNavigation<any>()
  const [currQues, setCurrQues] = useState(0)
  const level: string = route.params.level ? route.params.level : 'easy'
  const [quizzes] = useState(getRandomArray(quizzData[level], 6))

  const onPress = (i: number) => () => {
    const { ans } = quizzes[currQues]
    const newStatus = [...status]
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.DISABLE
    }
    if (i == ans) {
      newStatus[i] = EStatus.CORRECT
      setPoint(point + 1)
    } else {
      newStatus[ans] = EStatus.CORRECT
      newStatus[i] = EStatus.IN_CORRECT
    }
    setNext(true)
    setStatus(newStatus)
  }

  const onNext = () => {
    if (currQues < quizzes.length - 1) {
      setCurrQues(currQues + 1)
      setNext(false)

      const newStatus = [...status]
      for (let index = 0; index < newStatus.length; index++) {
        newStatus[index] = EStatus.NORMAL
      }
      setStatus(newStatus)
    } else {
      router.push({
        pathname: '/quizz-result',
        params: {
          level: level,
          point,
          length: quizzes.length,
        },
      })
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Mức độ ${show[level]}`,
    })
  }, [])

  return (
    <View className="flex-1 bg-white">
      <ScreenWrapper>
        <HeaderComponent
          title={`Mode ${level}`}
          iconLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <ArrowLeft size={24} color="black" />
            </TouchableOpacity>
          }
        />
      </ScreenWrapper>
      <View className="space-y-6 flex-1">
        <Image alt="img-ques" className="w-full h-[200px]" source={quizzes[currQues].image} />
        <View className="px-8 space-y-8">
          <Text className="text-gray-800 font-semibold text-sm w-full text-center">
            {quizzes[currQues].ques}
          </Text>
          <View className="w-full space-y-4">
            {quizzes[currQues].choose.map((item: string, i: number) => (
              <TextBox
                key={`${item}-${i}`}
                status={status[i]}
                onPress={onPress(i)}
                content={item}
                next={next}
              />
            ))}
          </View>
        </View>
      </View>
      <View className="my-8 px-8">
        <TouchableOpacity disabled={!next} onPress={onNext}>
          <View
            className={`w-full px-4 py-3.5 rounded-xl bg-primary ${!next ? 'opacity-50' : 'opacity-100'}`}
          >
            <Text className="text-white text-center">
              {next && currQues === quizzes.length - 1 ? 'Hoàn thành' : 'Tiếp tục'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QuizzScreen
