import React from "react";
import {Link} from "react-router-dom";
import like from "../assets/images/icon/like.png";
import StorageHelper from "../helper/storageHelper";
// import {
//   withLastLocation,
//   WithLastLocationProps
// } from "react-router-last-location";

export default class StepTwoPage extends React.Component {
    render() {
        const { location, history } = this.props
        return (
            <div className="step-2 page">
                <Link to="/step3">
                    <button className="next-button green" onClick={() => StorageHelper.addStep(2, 1)}>
                        <img className="agree" src={like} alt=" "/>
                        موافقم
                    </button>
                    <button className="next-button red" onClick={() => StorageHelper.addStep(2, 0)}>
                        {" "}
                        <img className="disagree" src={like} alt=" "/>
                        مخالفم، دقیق میدونم
                    </button>
                </Link>
            </div>
        );
    }
}

