import React from "react";
import {Link} from "react-router-dom";
import like from "../assets/images/icon/like.png";

export default class StepTwoPage extends React.Component {
    render() {
        return (
            <div className="step-2 page" >
                <Link to="/step3">
                    <button className="next-button green">
                        <img className="agree" src={like} alt=" "/>
                        موافقم
                    </button>
                    <button className="next-button red">
                        {" "}
                        <img className="disagree" src={like} alt=" "/>
                        مخالفم، دقیق میدونم
                    </button>
                </Link>
            </div>
        );
    }
}
