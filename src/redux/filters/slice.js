import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload?.trim().toLowerCase();
    },
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
