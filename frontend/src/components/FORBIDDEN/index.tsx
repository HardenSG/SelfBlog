import { Canvas, CoverView, View } from '@tarojs/components'
import { useDidShow } from '@tarojs/taro'
import { $, loadAnimation } from '../../utils/tools'
import './index.module.scss'
import FORBIDDEN from 'src/static/SVG/forbidden.json'

const Index = () => {
  useDidShow(() => {
    setTimeout(() => {
      loadAnimation($('#ForbiddenContainer__bgContainer__canvas'), {
        animationData: FORBIDDEN,
      })
    }, 0)
  })
  return (
    <View className='ForbiddenContainer'>
      <View className='ForbiddenContainer__bgContainer'>
        <Canvas
          className='ForbiddenContainer__bgContainer__canvas'
          id='ForbiddenContainer__bgContainer__canvas'
          type='2d'
        ></Canvas>
        <CoverView className='ForbiddenContainer__bgContainer__title'>
          SORRY，你没有权限访问该界面
        </CoverView>
      </View>
    </View>
  )
}

export default Index
