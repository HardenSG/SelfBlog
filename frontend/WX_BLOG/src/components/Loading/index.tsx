import { Canvas, View } from '@tarojs/components'
import { useDidShow } from '@tarojs/taro'
import { $, loadAnimation } from '../../utils/tools'
import './index.module.scss'
import loading1 from '../../static/SVG/loading1.json'
import loading2 from '../../static/SVG/loading2.json'
import loading3 from '../../static/SVG/loading3.json'
import loading4 from '../../static/SVG/loading4.json'
import loading5 from '../../static/SVG/loading5.json'
import loading6 from '../../static/SVG/loading6.json'
import loading7 from '../../static/SVG/loading7.json'

const LOADING_AVG = [loading1, loading2, loading3, loading4, loading5, loading6, loading7]

const Index = () => {
  useDidShow(() => {
    setTimeout(() => {
      const random = ~~((Math.random() + 1) * LOADING_AVG.length) % LOADING_AVG.length

      loadAnimation($('#LoadingContainer__bgContainer__canvas'), {
        animationData: LOADING_AVG[random],
      })
    }, 0)
  })
  return (
    <View className='LoadingContainer'>
      <View className='LoadingContainer__bgContainer'>
        <Canvas
          className='LoadingContainer__bgContainer__canvas'
          id='LoadingContainer__bgContainer__canvas'
          type='2d'
        ></Canvas>
      </View>
    </View>
  )
}

export default Index
