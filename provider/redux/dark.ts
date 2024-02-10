import { createSlice } from "@reduxjs/toolkit";

export const changeDarkSliceReducer = createSlice({
  name: "dark",
  initialState: {
    value: true,
  },
  reducers: {
    setDark: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDark } = changeDarkSliceReducer.actions;
export const darkSelector = (state: any) => state.dark;
export default changeDarkSliceReducer.reducer;