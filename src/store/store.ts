import { configureStore } from '@reduxjs/toolkit'
import AccountSlice from '../Slices/AccountSlice'

export const store = configureStore({
  reducer: {
    Account: AccountSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch