import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
>>>>>>> dceaf50 ([윤선영] ADD : 로그인 페이지 완료 및 commit history 정리)
      </Routes>
    </BrowserRouter>
  );
}
