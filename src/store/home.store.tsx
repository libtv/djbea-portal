import { createSlice } from "@reduxjs/toolkit";

export const MenuAction = createSlice({
  name: "menu",
  initialState: { menu: "", current: "" },
  reducers: {
    create(state, action) {
      state.menu = action.payload;
    },
  },
});

export const { create } = MenuAction.actions;
