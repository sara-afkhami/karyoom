import React from "react";
import { Link } from "react-router-dom";

export default class StepFourPage extends React.Component {
  render() {
    return (
      <div className="step-4">
        <Link to="/step5">
        <button className="next-button">!ادامه بده</button>
        </Link>
      </div>
    );
  }
}
