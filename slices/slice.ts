import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditSearchParams } from '../types/types'
import { RootState } from '../app/store'

export interface queryState {
  params: EditSearchParams
}

const initialState: queryState = {
  params: {
    type: '',
    place: '',
  },
}

export const paramSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<EditSearchParams>) => {
      state.params = action.payload
    },
    resetSearchParams: (state) => {
      state.params = initialState.params
    },
  },
})

export const { setSearchParams, resetSearchParams } = paramSlice.actions

export const selectSearchParams = (state: RootState) =>
  state.searchParams.params

export default paramSlice.reducer
