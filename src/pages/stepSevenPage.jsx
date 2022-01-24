import React from "react";
import ReactPlayer from "react-player";
import like from "../assets/images/icon/like.png";
import profile from "../assets/images/icon/profile.png"

export default class StepSevenPage extends React.Component {

    componentWillMount(){
        setTimeout(() => {
            this.props.history.push('/step8');
        }, 3000)
    }

    render() {
        return (
            <div className="step-5 page">
                <div className="videoPlayer">
                    <div className=""><img alt="" src={profile} className="profile-image"></img></div>
                    <div className="video">
                        <ReactPlayer
                            className="player"
                            playing='true'
                            controls='true'
                            height="25%"
                            width="70%"
                            url="https://as4.cdn.asset.aparat.com/aparat-video/13eaba29fca59939a9f9a06f99ea68e827383028-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjljZmQzMGFmNjkyOTdiNjhhODQxYzdjN2E5NWEwYjFhIiwiZXhwIjoxNjQxODYzODEyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.4ZxE9u1PBVac2yCOkFNeSmvd6GruOja6VpgCjvJF8iM"
                        />
                    </div>
                </div>
                <div className="buttons">
                    <button className="next-button green">
                        <img className="agree" src={like} alt=" "/>
                        خیلی خوب بود
                    </button>
                    <button className="next-button red">
                        {" "}
                        <img className="disagree" src={like} alt=" "/>
                        دوسش نداشتم
                    </button>
                </div>
            </div>
        );
    }
}
