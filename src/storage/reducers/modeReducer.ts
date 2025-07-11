import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModeState {
    edit: boolean;
    add: boolean;
}

const initialState: ModeState = {
    edit: false,
    add: false,
};

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<{ mode: keyof ModeState; value: boolean }>) => {
            const { mode, value } = action.payload;
            state[mode] = value;
        },
        toggleMode: (state, action: PayloadAction<keyof ModeState>) => {
            const mode = action.payload;
            state[mode] = !state[mode];
        },
    },
});

export const { setMode, toggleMode } = modeSlice.actions;
export default modeSlice.reducer;