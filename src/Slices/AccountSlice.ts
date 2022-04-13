import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Loader {
  Loader: Boolean
}

// Define the initial state using that type
const initialState: Loader = {
  Loader: false,
}

export const AccountSlice = createSlice({
  name: 'Loader',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    activeToggle: (state) => {
      state.Loader = !state.Loader
    }}
});

export const { activeToggle } = AccountSlice.actions
export default AccountSlice.reducer