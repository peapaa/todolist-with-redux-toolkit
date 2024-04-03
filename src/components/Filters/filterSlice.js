import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priority: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterBySearch: (state, action) => {
      state.search = action.payload;
    },
    filterByStatus: (state, action) => {
      state.status = action.payload;
    },
    filterByPrority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const { filterBySearch, filterByStatus, filterByPrority } =
  filterSlice.actions;
export default filterSlice.reducer;
