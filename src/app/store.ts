import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/slices/counter/counter";
import sliderReducer from "../features/slices/slider/slider";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        slider: sliderReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
