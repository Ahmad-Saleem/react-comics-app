import { createSlice } from '@reduxjs/toolkit'
import { fetchComicById } from './action'

const initialState = {
  data: null,
  loading: false,
  error: null,
}

export const comicSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComicById.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        data: {
          ...action.payload,
        },
      }
    },
    [fetchComicById.pending]: (state) => {
      return {
        ...state,
        loading: true,
      }
    },
    [fetchComicById.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    },
  },
})

export default comicSlice.reducer
