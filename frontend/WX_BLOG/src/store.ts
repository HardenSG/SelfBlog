import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from './models'
import immerPlugin from '../node_modules/@rematch/immer'
import selectPlugin from '../node_modules/@rematch/select'

export const store = init<RootModel>({
  models,
  plugins: [immerPlugin(), selectPlugin()],
})

export type Store = typeof store
export type RootDispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
