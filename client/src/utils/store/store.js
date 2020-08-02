import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import comicsReducer from './comicsReducer'

export const initialState = {
  comics: {
    data: null,
    loading: false,
    error: null,
  },
}

const store = configureStore({
  reducer: {
    comics: comicsReducer,
  },
  middleware: [...getDefaultMiddleware()],
  preloadedState: initialState,
})

export const dispatch = store.dispatch
export default store
