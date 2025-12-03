import { configureStore } from '@reduxjs/toolkit'
import { countriesApi } from '../services/countries'

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch