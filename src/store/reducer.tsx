import { configureStore } from "@reduxjs/toolkit";
import { MenuAction } from "./home.store";
import { RefreshAction } from "./refresh.store";

export const store = configureStore({
  reducer: {
    menu: MenuAction.reducer,
    refresh: RefreshAction.reducer,
  },
});
