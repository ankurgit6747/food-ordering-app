import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: ""
}

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    fetch_user: (state, action) => {
      state.userInfo = action.payload
    }
  }
})

export const { fetch_user } = userSlice.actions;

export default userSlice.reducer;