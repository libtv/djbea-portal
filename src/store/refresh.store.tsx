import { createSlice } from "@reduxjs/toolkit";

export const RefreshAction = createSlice({
  name: "refresh",
  initialState: { refresh: false },
  reducers: {
    refresh(state) {
      state.refresh = !state.refresh;
    },
  },
});

export let { refresh } = RefreshAction.actions;
