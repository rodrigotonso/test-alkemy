import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import teamReducer from "./slices/teamSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        team: teamReducer,
    },
});
