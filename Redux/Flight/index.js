import { createSlice } from "@reduxjs/toolkit";

export const FlightSlice = createSlice({
    name: 'FlightManager',
    initialState: {
        savedFlight: {}
    },
    reducers: {
        saveFlight: (state , action) => {
            state.savedFlight = action.payload;
        }
    }
})

export const { saveFlight } = FlightSlice.actions
const FlightManager = FlightSlice.reducer
export default FlightManager