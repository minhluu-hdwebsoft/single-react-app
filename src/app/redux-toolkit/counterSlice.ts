import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "app/api/apiClient";

export interface CounterState {
  count: number;
  loadingState: "idle" | "pending" | "success" | "failture";
  store: "redux" | "redux-toolkit";
}

const initialState: CounterState = {
  count: 0,
  loadingState: "idle",
  store: "redux-toolkit",
};

export const loadingAsyncToolkit = createAsyncThunk("counter/loadingAsync", async (dispatch, getState) => {
  await apiClient(2000);
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    refresh: () => {
      return initialState;
    },
    loading: (state) => {
      state.loadingState = "pending";
    },
    loadingSuccess: (state) => {
      state.loadingState = "success";
    },
    loadingFailture: (state) => {
      state.loadingState = "failture";
    },
  },
  extraReducers(builder) {
    builder.addCase(loadingAsyncToolkit.pending, (state, action) => {
      state.loadingState = "pending";
    });
    builder.addCase(loadingAsyncToolkit.fulfilled, (state, action) => {
      state.loadingState = "success";
    });
    builder.addCase(loadingAsyncToolkit.rejected, (state, action) => {
      state.loadingState = "failture";
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, refresh } = counterSlice.actions;

export default counterSlice.reducer;
