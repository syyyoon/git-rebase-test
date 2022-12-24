import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
<<<<<<< HEAD
import Detail from "./pages/Detail/Detail";
=======
import List from "./pages/List/List";
>>>>>>> 6c03647 ([김개발] 리스트페이지 레이아웃 완료)

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
<<<<<<< HEAD
=======
        <Route path="/detail" element={<Detail />} />
>>>>>>> a1da926 ([윤선영] ADD : detail 페이지에 버튼 추가)
=======
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
>>>>>>> 6c03647 ([김개발] 리스트페이지 레이아웃 완료)
      </Routes>
    </BrowserRouter>
  );
}
