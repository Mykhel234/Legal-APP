import React from "react";
import Home from "./component/Home";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import AllLawyer from "./component/AllLawyer";
import User from "./component/User";
import Profile from "./component/Profile";
import File from "./component/admin/File";
import LawyersCount from "./component/LawyersCount";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/AllLawyer" element={<AllLawyer />} />
        <Route path="/User" element={<User />} />
        <Route path="/:id/Profile" element={<Profile />} />
        <Route path="/File" element={<File />} />
        <Route path="/LawyersCount" element={<LawyersCount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
