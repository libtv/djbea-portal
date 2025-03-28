import React from "react";
import "./style/css/default/reset.css";
import "./style/css/default/common.css";
import "./style/css/default/color.css";
import { Routes, Route } from "react-router-dom";
import { HomeProvider } from "./route/home/home.provider";
import { HomeHeader } from "./route/home/home.header";
import { HomeContext } from "./route/home/home.context";
import { HomeFooter } from "./route/home/home.footer";
import { MenuContext } from "./route/menu/menu.context";
import { MenuHeader } from "./route/menu/menu.header";
import { ReHomeContext } from "./route/rehome/home.context";
import { ReHomeFooter } from "./route/rehome/home.footer";
import { ReHomeHeader } from "./route/rehome/home.header";
import { MenuProvider } from "./route/menu/menu.provider";

function App() {
  return (
    <HomeProvider>
      <Routes>
        <Route
          path="/menu/:menu_id/*"
          element={
            <MenuProvider>
              <HomeHeader />
              <MenuHeader />
              <MenuContext />
              <HomeFooter />
            </MenuProvider>
          }></Route>
        <Route
          path="/rehome/*"
          element={
            <>
              <ReHomeHeader></ReHomeHeader>
              <ReHomeContext></ReHomeContext>
              <ReHomeFooter></ReHomeFooter>
            </>
          }></Route>
        <Route
          path="/*"
          element={
            <>
              <HomeHeader />
              <HomeContext />
              <HomeFooter />
            </>
          }></Route>
      </Routes>
    </HomeProvider>
  );
}

export default App;
