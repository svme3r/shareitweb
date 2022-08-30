import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  Leagues : []
};

// GET REQUESTS
export const GetLeagues  = createAsyncThunk("GetLeagues ", async () => {
  const result = await getRequest(`${BASE_URL}/leagues/home`, "get");
  return result;
});

const Leagues = createSlice({
  name: "getLeagues ",
  initialState,
  reducers: {},
  extraReducers: {
    [GetLeagues.fulfilled]: (state, action) => {
      const data = action.payload;
      state.Leagues  = data;
      return state;
    },
  },
});

export default Leagues.reducer;
