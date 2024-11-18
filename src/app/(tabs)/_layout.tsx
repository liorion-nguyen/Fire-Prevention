import React from 'react'
import { Tabs } from 'expo-router'
import { Text, View } from 'react-native'
import { Document, TaskSquare, Video } from 'iconsax-react-native'

type TabIconProps = {
  name: string
  IconName: any
  focused: boolean
  color: string
  size: number
}

const TabIcon = ({ name, color, focused, IconName }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <IconName size="24" color={color} variant={'Outline'} />
      {/* <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" /> */}
      <Text style={{ color }} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#D82C2A',
          tabBarInactiveTintColor: '#6B7280',
          tabBarStyle: {
            paddingTop: 8,
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="video"
          options={{
            title: 'Video',
            headerShown: false,
            tabBarIcon: (props) => <TabIcon name="Video" IconName={Video} {...props} />,
          }}
        />

        <Tabs.Screen
          name="lesson"
          options={{
            title: 'Bài giảng',
            tabBarIcon: (props) => <TabIcon name="Bài giảng" IconName={Document} {...props} />,
          }}
        />

        <Tabs.Screen
          name="practice"
          options={{
            title: 'Bài tập',
            tabBarIcon: (props) => <TabIcon name="Bài tập" IconName={TaskSquare} {...props} />,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
