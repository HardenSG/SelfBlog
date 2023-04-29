import { createModel } from '@rematch/core'
import { RootModel } from './models'

export interface CommonState {
  name?: string
  age?: number | string
}

export const defaultValue: CommonState = {
  name: 'SG',
  age: 21,
}

export const common = createModel<RootModel>()({
  state: defaultValue,
  reducers: {
    SET_Userinfo: (state: CommonState, newUserinfo: CommonState) => {
      state = newUserinfo
      return state
    },
  },
})
