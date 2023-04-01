import { createSlice } from '@reduxjs/toolkit'

export const AuthenticationStates = createSlice({
  name: 'TokenManager',
  initialState: {
    user: {},
    loginStatus: false
  },
  reducers: {
    getUser: (state , action) => {
      state.user = action.payload
      state.loginStatus = true
    },
    deleteUser: (state) => {
      state.user = {}
      state.loginStatus = false
    }
  }
})
// Action creators are generated for each case reducer function
export const { getUser , deleteUser } = AuthenticationStates.actions
const GetAT = AuthenticationStates.reducer
export default GetAT;