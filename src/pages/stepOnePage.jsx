import React from "react";
import {Link} from "react-router-dom";

export default class StepOnePage extends React.Component {
    render() {
        return (
            <div className="step-1 page">
                <Link to="/step2">
                    <button className="next-button"  style={{width: "200px"}}>
                        !حرکت
                    </button>
                </Link>
            </div>
        );
    }
}
