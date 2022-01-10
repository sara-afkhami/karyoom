import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import like from "../assets/images/icon/like.png";
import profile from "../assets/images/icon/profile.png";

export default class StepSevenPage extends React.Component {
  render() {
    return (
      <div className="step-5 page">
        <div className="tip">
          <img className="profile" src={profile} alt=" " />
          <div className="dialogue2">
            <p className="paragraph">
              در پلتفرم کاریوم، علاوه بر فراگیری آموزش ها به صورت پکیجی از دوره
              های مورد نیاز، می توانید همزمان موقعیت های ورود به شغل را نیز
              مشاهده و مناسب ترین مورد را پیگیری و انتخاب نمایید
            </p>
            <div className="video">
              {" "}
              <ReactPlayer
                playing="true"
                controls="true"
                height="250px"
                width="500px"
                url="https://as4.cdn.asset.aparat.com/aparat-video/13eaba29fca59939a9f9a06f99ea68e827383028-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjljZmQzMGFmNjkyOTdiNjhhODQxYzdjN2E5NWEwYjFhIiwiZXhwIjoxNjQxODYzODEyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.4ZxE9u1PBVac2yCOkFNeSmvd6GruOja6VpgCjvJF8iM"
              />
            </div>
          </div>
        </div>
        <Link to="/step8">
          <button className="next-button green">
            <img className="agree" src={like} alt=" " />
            خیلی خوب بود
          </button>
        </Link>
        <Link to="/step8">
          <button className="next-button red">
            {" "}
            <img className="disagree" src={like} alt=" " />
            دوسش نداشتم
          </button>
        </Link>
      </div>
    );
  }
}
