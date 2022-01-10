import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import like from "../assets/images/icon/like.png";
import profile from "../assets/images/icon/profile.png";

export default class StepFivePage extends React.Component {
  render() {
    return (
      <div className="step-5">
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
                url="https://www.aparat.com/v/4DX3h"
              />
            </div>
          </div>
        </div>
        <Link to="/step6">
        <button className="next-button green">
          <img className="agree" src={like} alt=" " />
          خیلی خوب بود
        </button>
        </Link>
        <Link to="/step6">
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
