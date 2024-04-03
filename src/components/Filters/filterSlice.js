import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  prority: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterBySearch: (state, action) => {
      state.search = action.payload;
    },
    filterByStatus: (state, action) => {
      state.status = action.payload;
    },
    filterByPrority: (state, action) => {
      state.prority.push(action.payload);
    },
  },
});

export const { filterBySearch, filterByStatus, filterByPrority } =
  filterSlice.actions;
export default filterSlice.reducer;
