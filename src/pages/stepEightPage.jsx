import React from "react";
import {Link} from "react-router-dom";
import like from "../assets/images/icon/like.png";

export default class StepEightPage extends React.Component {
    render() {
        return (
            <div className="step-8 page" >
                <Link to="/step9">
                    <button className="next-button green"  style={{width: "400px"}}>
                        <img className="agree" src={like} alt=" "/>
                        وای ازین بهتر نمیشه
                    </button>
                </Link>
                <Link to="/step9">
                    <button className="next-button red"  style={{width: "400px"}}>
                        {" "}
                        <img className="disagree" src={like} alt=" "/>
                        حالا چه ضرورتی داره، بعدا تهیه می کنم
                    </button>
                </Link>
            </div>
        );
    }
}
