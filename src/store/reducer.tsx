import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { MenuAction } from "./home.store";
import { RefreshAction } from "./refresh.store";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  menu: MenuAction.reducer,
  refresh: RefreshAction.reducer,
});

// export const store = configureStore({
//   reducer: {
//     menu: MenuAction.reducer,
//     refresh: RefreshAction.reducer,
//   },
// });

const persistConfig: any = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});
