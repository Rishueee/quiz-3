import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./Component/Mainpage";
import { BrowserRouter } from "react-router-dom";
import Start from "./Component/Start";

class Quiz extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/Mainpage" element={<Mainpage />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Quiz;
