import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../../utils/fetch";

const initialState = {
  Stories : [],
  PostStories : [],
};

// GET REQUESTS
export const GetStories  = createAsyncThunk("GetStories ", async () => {
  const result = await getRequest(`${BASE_URL}/stories/homestories`, "get");
  return result;
});

// POST REQUESTS
export const PostStory  = createAsyncThunk("PostStory ", async (body) => {
  const result = await postRequest(`${BASE_URL}/stories/createStory`,body);
  return result;
});

const Stories = createSlice({
  name: "story ",
  initialState,
  reducers: {},
  extraReducers: {
    [GetStories.fulfilled]: (state, action) => {
      const data = action.payload;
      state.Stories  = data;
      return state;
    },
    [PostStory.fulfilled]: (state, action) => {
      const data = action.payload;
      state.PostStories  = data;
      return state;
    },
  },
});

export default Stories.reducer;
