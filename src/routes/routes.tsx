import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout";

import { CartPage } from "../Pages/Cart";

import { HomePage } from "../Pages/Home/index";
import { defaultTheme } from "../styles/themes/default";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
