import React from "react";
import { Link } from "react-router-dom";
import like from "../assets/images/icon/like.png";

export default class StepThreePage extends React.Component {
  render() {
    return (
      <div className="step-3 page">
        <Link to="/step4">
        <button className="next-button green">
          <img className="agree" src={like} alt=" " />
          این خیلی میتونه کمک کنه
        </button>
        <button className="next-button red">
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، من خودمو بهتر میشناسم
        </button>
        </Link>
      </div>
    );
  }
}
