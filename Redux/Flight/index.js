import { createSlice } from "@reduxjs/toolkit";

export const FlightSlice = createSlice({
    name: 'FlightManager',
    initialState: {
        savedFlight: {},
        savedReturnFlight: {}
    },
    reducers: {
        saveFlight: (state , action) => {
            state.savedFlight = action.payload;
        },
        saveReturnFlight: (state , action) => {
            state.savedReturnFlight = action.payload;
        }
    }
})

export const { saveFlight , saveReturnFlight } = FlightSlice.actions    
const FlightManager = FlightSlice.reducer
export default FlightManager