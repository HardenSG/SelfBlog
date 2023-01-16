import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import FORBIDDEN from 'src/components/FORBIDDEN/index'

const Index = () => {
  const [state, setState] = useState<boolean>(false)
  setTimeout(() => {
    setState(true)
  }, 10000)
  return (
    <View className='index'>
      {state ? (
        <Text>略略略1111</Text>
      ) : (
        <>
          <FORBIDDEN />
          {state}
        </>
      )}
    </View>
  )
}

export default Index
