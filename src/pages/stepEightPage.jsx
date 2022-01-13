import React from "react";
import {Link} from "react-router-dom";
import like from "../assets/images/icon/like.png";
import StorageHelper from "../helper/storageHelper";

export default class StepEightPage extends React.Component {
    render() {
        return (
            <div className="step-8 page" >
                <Link to="/step9">
                    <button className="next-button green" onClick={() => StorageHelper.addStep("1")}>
                        <img className="agree" src={like} alt=" "/>
                        وای ازین بهتر نمیشه
                    </button>
                </Link>
                <Link to="/step9">
                    <button className="next-button red" onClick={() => StorageHelper.addStep("0")}>
                        {" "}
                        <img className="disagree" src={like} alt=" "/>
                        حالا چه ضرورتی داره، بعدا تهیه می کنم
                    </button>
                </Link>
            </div>
        );
    }
}
