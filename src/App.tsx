import React from "react";
import "./style/css/default/reset.css";
import "./style/css/default/common.css";
import { Routes, Route } from "react-router-dom";
import { HomeProvider } from "./route/home/home.provider";
import { HomeHeader } from "./route/home/home.header";
import { HomeContext } from "./route/home/home.context";
import { HomeFooter } from "./route/home/home.footer";
import { MenuContext } from "./route/menu/menu.context";
import { MenuHeader } from "./route/menu/menu.header";

function App() {
  return (
    <Routes>
      <Route
        path="/menu/:id"
        element={
          <HomeProvider>
            <HomeHeader />
            <MenuHeader />
            <MenuContext />
            <HomeFooter />
          </HomeProvider>
        }
      ></Route>
      <Route
        path="/*"
        element={
          <HomeProvider>
            <HomeHeader />
            <HomeContext />
            <HomeFooter />
          </HomeProvider>
        }
      ></Route>
    </Routes>
  );
}

export default App;
