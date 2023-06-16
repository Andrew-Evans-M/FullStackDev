import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../Components/SignIn";
import Home from "../Components/Home";

function routing() {
  return (
    <Routes>
      <Route exact path="" element={<SignIn />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default routing;
