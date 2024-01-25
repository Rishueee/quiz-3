import React from "react";
import "./Component.css";
import { Link } from "react-router-dom";

class Start extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1 className="start">Quiz App </h1>
          <Link to="/Mainpage">
            {" "}
            <button className="srtbtn"> Play </button>{" "}
          </Link>
        </div>
      </>
    );
  }
}

export default Start;
