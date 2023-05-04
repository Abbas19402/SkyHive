import { createSlice } from "@reduxjs/toolkit";

const AirlineClass = createSlice({
    name: 'Airline Class',
    initialState: {
        outboundClass: {},
        inboundClass: {}
    },
    reducers: {
        setAirlineClass: (state , action) => {
            state.outboundClass = action.payload.outbound,
            state.inboundClass = action.payload.inbound
        }
    }
})

export const { setAirlineClass } = AirlineClass.actions;
const AirlineClassReducer = AirlineClass.reducer;
export default AirlineClassReducer;