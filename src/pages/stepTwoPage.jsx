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
        // let stepCurrent = location.pathname.match(/\d+$/)[0];
        // let stepPrv = lastLocation.pathname.match(/\d+$/)[0];
        // console.log(stepCurrent,stepPrv+ "here")
        const help = StorageHelper.getSteps();
    console.log("help------>"+help)
        return (
            <div className="step-2 page">
                <Link to="/step3">
                    <button className="next-button green" onClick={() => StorageHelper.addStep("1")}>
                        <img className="agree" src={like} alt=" "/>
                        موافقم
                    </button>
                    <button className="next-button red" onClick={() => StorageHelper.addStep("0")}>
                        {" "}
                        <img className="disagree" src={like} alt=" "/>
                        مخالفم، دقیق میدونم
                    </button>
                </Link>
            </div>
        );
    }
}

