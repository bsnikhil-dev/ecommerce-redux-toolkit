import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { sliderData } from "../../../assets/data/dataText";

type initialStateProps = {
    value: number;
    length: number;
}

const initialState: initialStateProps = {
    value: 0,
    length: sliderData.length,
}

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        nextSlide: (state, action: PayloadAction<number>) => {
            state.value = action.payload > state.length -1 ? 0 : action.payload;
            // console.log("Next Slide ", action.payload);
            // console.log("Next Slide ", state);
        },
        prevSlide: (state, action: PayloadAction<number>) => {
            state.value = action.payload < 0 ? state.length -1 : action.payload;
            // console.log("Prev Slide ", action.payload);
            // console.log("Prev Slide ", state);
        },
        dotSlide: (state, action: PayloadAction<number>) => {
            // console.log("Dot Slide ", action.payload);
            // console.log("Dot Slide ", state);
        }
    }
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;