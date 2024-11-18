import { ImageSourcePropType } from 'react-native'

export interface IData {
  id: number
  image: any
  type: ETypeData
  youtubeId?: string
  description: string
  title: string
  body: Array<{
    title: string
    image?: ImageSourcePropType
    content: string
  }>
}

export enum ETypeData {
  VIDEO,
  LESSON,
}
