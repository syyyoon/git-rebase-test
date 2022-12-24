import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import List from "./pages/List/List";
import F1 from "./pages/F1";
import F2 from "./pages/F2";
import F3 from "./pages/F3";
import F5 from "./pages/F5";
import F7 from "./pages/F7";
import F6 from "./pages/F6";
import Nav from "./pages/Nav";
import Viewer from "./pages/Viewer";
Vi;

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/f1" element={<F1 />} />
        <Route path="/f2" element={<F2 />} />
        <Route path="/f3" element={<F3 />} />
        <Route path="/f5" element={<F5 />} />
        <Route path="/f7" element={<F7 />} />
        <Route path="/f6" element={<F6 />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes>
    </BrowserRouter>
  );
}
