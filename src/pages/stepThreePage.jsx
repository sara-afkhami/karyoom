import React from "react";
import { Link } from "react-router-dom";
import like from "../assets/images/icon/like.png";
import StorageHelper from "../helper/storageHelper";

export default class StepThreePage extends React.Component {
  render() {
    return (
      <div className="step-3 page">
        <Link to="/step4">
        <button className="next-button green" onClick={() => StorageHelper.addStep("1")}>
          <img className="agree" src={like} alt=" " />
          این خیلی میتونه کمک کنه
        </button>
        <button className="next-button red" onClick={() => StorageHelper.addStep("0")}>
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، من خودمو بهتر میشناسم
        </button>
        </Link>
      </div>
    );
  }
}
