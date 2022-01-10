import React from "react";
import { Link } from "react-router-dom";

export default class StepNinePage extends React.Component {
  render() {
    return (
      <div className="step-9">
        <Link to="/step10">
        <button className="next-button green">
          <img className="agree" src={like} alt=" " />
          موافقم
        </button>
        </Link>
        <Link to="/step10">
        <button className="next-button red">
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، دقیق میدونم
        </button>
        </Link>
      </div>
    );
  }
}
