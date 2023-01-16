import Taro from '@tarojs/taro'

export const login = () => {
  Taro.getAccountInfoSync()
  Taro.login({
    success(res) {
      console.log(res)
    },
  })
}
