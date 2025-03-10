import { createSlice } from "@reduxjs/toolkit";

export const MenuAction = createSlice({
  name: "menu",
  initialState: { menu: "", current: "", depth2: "", depth3: "" },
  reducers: {
    create(state, action) {
      state.menu = action.payload;
    },
    setMenu(state, action) {
      state.current = action.payload;
    },

    setDepth2(state, action) {
      state.depth2 = action.payload;
    },

    setDepth3(state, action) {
      state.depth3 = action.payload;
    },
  },
});

export const { create, setMenu, setDepth2, setDepth3 } = MenuAction.actions;
