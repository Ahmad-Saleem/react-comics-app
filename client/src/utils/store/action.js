import { createAsyncThunk } from '@reduxjs/toolkit'
import * as comicAPI from '../api/comicAPI'

export const fetchComicById = createAsyncThunk(
  'comics/fetchById',
  async (id) => {
    const response = await comicAPI.fetchById(id)
    return response
  },
)
