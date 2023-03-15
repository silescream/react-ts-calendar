import { createSlice } from "@reduxjs/toolkit";

type EventState = {};

const initialState: EventState = {};

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
});

export const {} = eventSlice.actions;

export default eventSlice.reducer;
