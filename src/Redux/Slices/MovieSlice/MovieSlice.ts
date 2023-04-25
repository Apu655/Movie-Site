import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "./MovieService";
import { Imovie } from "./interfaces";
const initialState: Imovie = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  movieList: [],
};

export const getMovie = createAsyncThunk(
  "movie/getAll",
  async (api:any, { rejectWithValue }) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await movieService.getMovie(api);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);
export const getMovieBySearch = createAsyncThunk(
  "movie/getBySearch",
  async (query: string, { rejectWithValue }) => {
    try {
      return await movieService.getMovieBySearch(query);
    } catch (error: any) {
      const message = "failed to search!";
      return rejectWithValue(message);
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movieList = action.payload;
      })
      .addCase(getMovieBySearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieBySearch.rejected, (state, action) => {
        state.isLoading = false;

        state.message = action.payload;
        state.isError = true;
      })
      .addCase(getMovieBySearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movieList = action.payload;
      });
  },
});

export const { reset } = movieSlice.actions;
export default movieSlice.reducer;
