import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout";

import { CartPage } from "../Pages/CompleteOrder";
import { Delivery } from "../Pages/Delivery";
import { Homepage } from "../Pages/Home";

import { Intro } from "../Pages/Home/components/intro/intro";
import { defaultTheme } from "../styles/themes/default";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/completeOrder" element={<CartPage />} />
      <Route path="/Delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
}
