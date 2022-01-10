import React from "react";
import { Link } from "react-router-dom";

export default class StepSixPage extends React.Component {
  render() {
    return (
      <div className="step-6">
        <Link to="/step7">
        <button className="next-button">
          !ادامه بده
        </button>
        </Link>
      </div>
    );
  }
}
