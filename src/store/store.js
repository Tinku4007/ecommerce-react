import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./slice/HomeSlice";
import { HomeService } from "./services/HomeService";
import authSlice from "./slice/AuthSlice";


export const store = configureStore({
    reducer: {
        [HomeSlice.name]: HomeSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [HomeService.reducerPath]: HomeService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(HomeService.middleware),
});