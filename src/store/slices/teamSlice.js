import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
    name: "team",
    initialState: {
        email: "",
        name: "",
        token: "",
    },
    reducers: {
        setteamToken: (state, action) => {
            state.token = action.payload;
        },
        setteam: (state, action) => {
            state = { ...action.payload };
        },
    },
});

export const { setteamToken, setteam } = teamSlice.actions;
export default teamSlice.reducer;
