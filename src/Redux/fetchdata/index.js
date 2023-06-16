import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  fetchData: [],
};

const data = createSlice({
  name: "countryData",
  initialState: INITIAL_STATE,

  reducers: {
    getData: (state,action) => {
      state.fetchData = action.payload;
      console.log(action.payload,"action.payloa");
    },
  },
});
export const { getData } = data.actions;
export default data.reducer;
