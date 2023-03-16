import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        token: "",
    },
    reducers: {
        setUserToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state = { ...action.payload };
        },
    },
});

export const { setUserToken, setUser } = userSlice.actions;
export default userSlice.reducer;
