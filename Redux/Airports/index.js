import { createSlice } from '@reduxjs/toolkit'

export const AirportData = createSlice({
  name: 'Airports',
  initialState: {
    airports: []
  },
  reducers: {
    getAirports: (state , action) => {
      state.airports = action.payload
      console.log(state.airports);
    },
  }
})
// Action creators are generated for each case reducer function
export const { getAirports } = AirportData.actions
const AirportsDataAPI = AirportData.reducer
export default AirportsDataAPI;