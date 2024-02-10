import { configureStore } from "@reduxjs/toolkit"
import { changeDarkSliceReducer } from './dark.ts';

export const store = configureStore({
	reducer: {
		changeDark: changeDarkSliceReducer.reducer,
	},
});