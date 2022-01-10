import React from "react";
import { Link } from "react-router-dom";
import like from "../assets/images/icon/like.png";
import profile from "../assets/images/icon/profile.png";
import instagram from "../assets/images/icon/instagram.png";

export default class StepThreePage extends React.Component {
  render() {
    return (
      <div className="step-3 page">
        <div className="tip">
          <img className="profile" src={profile} alt=" " />
          <div className="dialogue">
            <p className="paragraph">
              نظرتون راجع به این که با یک نفر متخصص مشورت کنید، تست هایی رو
              انجام بدید و تحلیل کاملی برای شناخت خودتون و مسیر شغلیتون بدست
              بیارید چیه؟ همین الان هم میتونید از طریق پیج اینستاگراممون در
              دایرکت . ...درخواست بدید و این روند رو به صورت کاملا رایگان انجام
              بدید
              <br/>
              <a
                className="instagram"
                href="https://www.instagram.com/kariumia/"
              >
                <img className="insta-image" src={instagram} alt="" />
                kariumia
              </a>
            </p>
          </div>
        </div>
        <Link to="/step4">
        <button className="next-button green">
          <img className="agree" src={like} alt=" " />
          این خیلی میتونه کمک کنه
        </button>
        </Link>
        <Link to="/step4">
        <button className="next-button red">
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، من خودمو بهتر میشناسم
        </button>
        </Link>
      </div>
    );
  }
}
