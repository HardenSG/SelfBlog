import React from 'react'
import { View, Text, Canvas } from '@tarojs/components'
import './index.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Button } from '@taroify/core'
import Taro from '@tarojs/taro'
import { URL } from 'src/utils/const'

const Index = () => {
  const state = useSelector((state1: RootState) => state1.common)

  return (
    <View className='index'>
      <Text>Hello world1212121!-- {state.age}</Text>
      <Button onClick={() => Taro.navigateTo({ url: URL.Detail + `?id=${12}` })}>去详细界面</Button>
    </View>
  )
}

export default Index
