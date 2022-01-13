import React from "react";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import like from "../assets/images/icon/like.png";
import StorageHelper from "../helper/storageHelper";

export default class StepFivePage extends React.Component {
    render() {
        return (
            <div className="step-5 page">
                <div className="video">
                    <ReactPlayer
                        playing="true"
                        controls="true"
                        height="auto"
                        width="36%"
                        url="https://as4.cdn.asset.aparat.com/aparat-video/13eaba29fca59939a9f9a06f99ea68e827383028-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjljZmQzMGFmNjkyOTdiNjhhODQxYzdjN2E5NWEwYjFhIiwiZXhwIjoxNjQxODYzODEyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.4ZxE9u1PBVac2yCOkFNeSmvd6GruOja6VpgCjvJF8iM"
                    /></div>
                <Link to="/step6">
                    <button className="next-button green" onClick={() => StorageHelper.addStep("1")}>
                        <img className="agree" src={like} alt=" "/>
                        خیلی خوب بود
                    </button>
                    <button className="next-button red" onClick={() => StorageHelper.addStep("0")}>
                        {" "}
                        <img className="disagree" src={like} alt=" "/>
                        دوسش نداشتم
                    </button>
                </Link>
            </div>
        );
    }
}
