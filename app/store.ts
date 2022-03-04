import { configureStore } from '@reduxjs/toolkit'
import searchParamsReducer from '../slices/slice'

export const store = configureStore({
  reducer: {
    searchParams: searchParamsReducer,
  },
})

//reducerで登録されているステートのすべての型
export type RootState = ReturnType<typeof store.getState>
