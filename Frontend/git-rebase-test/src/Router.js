import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
<<<<<<< HEAD
=======
        <Route path="/detail" element={<Detail />} />
>>>>>>> a1da926 ([윤선영] ADD : detail 페이지에 버튼 추가)
      </Routes>
    </BrowserRouter>
  );
}
