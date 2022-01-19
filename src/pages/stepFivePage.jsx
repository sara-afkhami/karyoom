import React from "react";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import like from "../assets/images/icon/like.png";
import StorageHelper from "../helper/storageHelper";
import profile from "../assets/images/icon/profile.png"

export default class StepFivePage extends React.Component {
    render() {
        return (
            <div className="step-5 page">
                {/* <div className="video-content"> */}
                <div className="videoPlayer">
                        <div className=""><img alt="" src={profile} className="profile-image"></img></div>
                        <div className="video">
                            <ReactPlayer
                            className="player"
                            playing="true"
                            controls="true"
                            height="25%"
                            width="70%"
                            url="https://as4.cdn.asset.aparat.com/aparat-video/13eaba29fca59939a9f9a06f99ea68e827383028-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjljZmQzMGFmNjkyOTdiNjhhODQxYzdjN2E5NWEwYjFhIiwiZXhwIjoxNjQxODYzODEyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.4ZxE9u1PBVac2yCOkFNeSmvd6GruOja6VpgCjvJF8iM"
                            />
                        </div>
                </div>
                    <div className="buttons">
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
                {/* </div> */}
            </div>
        );
    }
}
