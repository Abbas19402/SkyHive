import { createSlice } from "@reduxjs/toolkit";

const TicketSlice = createSlice({
    name: 'tickets',
    initialState: {
        outbound: {},
        inbound: {},
        bookingId: {}
    },
    reducers: {
        setTickets: (state , action) => {
            state.outbound = action.payload.outbound
            state.inbound = action.payload.inbound
        },
        setBooking: (state ,action) => {
            state.bookingId = action.payload
        }
    }
})

export const { setTickets , setBooking } = TicketSlice.actions;
const TicketReducer = TicketSlice.reducer;
export default TicketReducer;