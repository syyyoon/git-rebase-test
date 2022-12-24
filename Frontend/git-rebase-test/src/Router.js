import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import List from "./pages/List/List";
import F2 from "./pages/F2";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
=======
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
>>>>>>> 896cd43 ([이나라] Add : 찐막)
        <Route path="/detail" element={<Detail />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/f2" element={<F2 />} />
      </Routes>
    </BrowserRouter>
  );
}
