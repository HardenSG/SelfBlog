import React from 'react'
import './app.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import { useError } from '@tarojs/taro'
import Welcome from './components/Welcome/index'

function App(props) {
  useError((err) => {
    // return <Error />
    console.log('错了', err)
  })
  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    <Provider store={store}>
      {/* props.children 是将要被渲染的页面 */}
      {props.children}
    </Provider>
  )
}

export default App
