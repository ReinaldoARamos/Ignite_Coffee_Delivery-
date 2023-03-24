import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout";

import { CartPage } from "../Pages/Cart";
import { Homepage } from "../Pages/Home";

import { Intro } from "../Pages/Home/components/intro";
import { defaultTheme } from "../styles/themes/default";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
