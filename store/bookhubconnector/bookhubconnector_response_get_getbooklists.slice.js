import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const bookhubconnector_get_api_v1_popular_books_list = createAsyncThunk("bookhubconnector_response_get_getbooklists/bookhubconnector_get_api_v1_popular_books_list", async payload => {
  const response = await apiService.bookhubconnector_get_api_v1_popular_books_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const bookhubconnector_response_get_getbooklistsSlice = createSlice({
  name: "bookhubconnector_response_get_getbooklists",
  initialState,
  reducers: {},
  extraReducers: {
    [bookhubconnector_get_api_v1_popular_books_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [bookhubconnector_get_api_v1_popular_books_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [bookhubconnector_get_api_v1_popular_books_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  bookhubconnector_get_api_v1_popular_books_list,
  slice: bookhubconnector_response_get_getbooklistsSlice
};