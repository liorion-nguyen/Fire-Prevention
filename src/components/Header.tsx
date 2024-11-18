import { Text, View } from 'react-native'
import React from 'react'
import { Notification, SearchNormal } from 'iconsax-react-native'

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <View className="flex-row items-center justify-between px-8">
      <View className="p-3 bg-gray-100 rounded-full">
        <SearchNormal size={24} color="#1F2937" />
      </View>
      <Text className="text-lg font-semibold text-gray-800">{title}</Text>
      <View className="p-3 bg-gray-100 rounded-full">
        <Notification size={24} color="#1F2937" />
      </View>
    </View>
  )
}

export default Header
