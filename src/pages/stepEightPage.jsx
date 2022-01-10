import React from "react";
import { Link } from "react-router-dom";

export default class StepEightPage extends React.Component {
  render() {
    return (
      <div className="step-8">
        <Link to="/step9">
        <button className="next-button green">
          <img className="agree" src={like} alt=" " />
          وای ازین بهتر نمیشه
        </button>
        </Link>
        <Link to="/step9">
        <button className="next-button red">
          {" "}
          <img className="disagree" src={like} alt=" " />
          حالا چه ضرورتی داره، بعدا تهیه می کنم
        </button>
        </Link>
      </div>
    );
  }
}
