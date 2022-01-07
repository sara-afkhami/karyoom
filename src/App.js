import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";

import "./App.css";
import like from "./images.png";
import profile from "./Intersection 3.png";
import formImage from "./form.png";
var gapi = require("gapi");

const SHEETS_ID = '1zNiNJMWEgsRBRCIIHS7fJ0DR93nJzRYnKpHWyeQ7pko';
const CLIENT_ID =
  '469988665626-u9457qcookqk0o6v8ld2j0q59o1rl1b6.apps.googleusercontent.com';
const APY_KEY = '1zNiNJMWEgsRBRCIIHS7fJ0DR93nJzRYnKpHWyeQ7pko';
const SCOPE = '';

function App() {
  const [step, setstep] = useState(0);
  
  handleClientLoad =()=> { //initialize the Google API
    gapi.load('client:auth2', this.initClient);
  }

  initClient =()=> { //provide the authentication credentials you set up in the Google developer console
    gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'scope': SCOPE,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(()=> {
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
      this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  if (step === 0) {
    console.log("object");
    return (
      <div className="step1">
        <button className="next-button step-1" onClick={() => setstep(1)}>
          حرکت!
        </button>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="step2">
        <button className="next-button step-2 green" onClick={() => setstep(2)}>
          <img className="agree" src={like} alt=" " />
          موافقم
        </button>
        <button className="next-button step-2 red" onClick={() => setstep(2)}>
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، دقیق میدونم
        </button>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="step3">
        <div className="tip">
          <img className="profile" src={profile} alt=" " />
          <div className="dialogue">
            <p className="paragraph">
              نظرتون راجع به این که با یک نفر متخصص مشورت کنید، تست هایی رو
              انجام بدید و تحلیل کاملی برای شناخت خودتون و مسیر شغلیتون بدست
              بیارید چیه؟ همین الان هم میتونید از طریق پیج اینستاگراممون در
              دایرکت . ...درخواست بدید و این روند رو به صورت کاملا رایگان انجام
              بدید
            </p>
          </div>
        </div>
        <button className="next-button step-3 green" onClick={() => setstep(3)}>
          <img className="agree" src={like} alt=" " />
          این خیلی میتونه کمک کنه
        </button>
        <button className="next-button step-3 red" onClick={() => setstep(3)}>
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، من خودمو بهتر میشناسم
        </button>
      </div>
    );
  }
  if (step === 3) {
    console.log("object");
    return (
      <div className="step4">
        <button className="next-button step-4" onClick={() => setstep(4)}>
          ادامه بده!
        </button>
      </div>
    );
  }
  if (step === 4) {
    return (
      <div className="step5">
        <div className="tip">
          <img className="profile" src={profile} alt=" " />
          <div className="dialogue">
            <p className="paragraph">
              در پلتفرم کاریوم، علاوه بر فراگیری آموزش ها به صورت پکیجی از دوره
              های مورد نیاز، می توانید همزمان موقعیت های ورود به شغل را نیز
              مشاهده و مناسب ترین مورد را پیگیری و انتخاب نمایید
            </p>
            <source src="/Videos/video1.mp4" type="video/mp4" />
          </div>
        </div>
        <button className="next-button step-5 green" onClick={() => setstep(5)}>
          <img className="agree" src={like} alt=" " />
          خیلی خوب بود
        </button>
        <button className="next-button step-5 red" onClick={() => setstep(5)}>
          {" "}
          <img className="disagree" src={like} alt=" " />
          دوسش نداشتم
        </button>
      </div>
    );
  }
  if (step === 5) {
    return (
      <div className="step6">
        <button className="next-button step-6" onClick={() => setstep(6)}>
          ادامه بده!
        </button>
      </div>
    );
  }
  if (step === 6) {
    return (
      <div className="step7">
        <button className="next-button step-7 green" onClick={() => setstep(7)}>
          <img className="agree" src={like} alt=" " />
          وای ازین بهتر نمیشه
        </button>
        <button className="next-button step-7 red" onClick={() => setstep(7)}>
          {" "}
          <img className="disagree" src={like} alt=" " />
          حالا چه ضرورتی داره، بعدا تهیه می کنم
        </button>
      </div>
    );
  }
  if (step === 7) {
    return (
      <div className="step8">
        <button className="next-button step-8 green" onClick={() => setstep(8)}>
          <img className="agree" src={like} alt=" " />
          موافقم
        </button>
        <button className="next-button step-8 red" onClick={() => setstep(8)}>
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، دقیق میدونم
        </button>
      </div>
    );
  }
  if (step === 8) {
    return (
      <div className="step9">
        <button className="next-button step-9 green" onClick={() => setstep(9)}>
          <img className="agree" src={like} alt=" " />
          موافقم
        </button>
        <button className="next-button step-9 red" onClick={() => setstep(9)}>
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، دقیق میدونم
        </button>
      </div>
    );
  }
  if (step === 9) {
    return (
      <div className="step10">
        <img className="login-image" src={formImage} alt="" />
        <div className="form">
          <h3>
            ما خیلی زود میایم <br></br>ثبت نام کن تا تو افتتاحیه دعوتت کنیم
          </h3>
          <Formik
            className="login"
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
            }}
            
            
            
            // onSubmit={async (values) => {
            //   await new Promise((r) => setTimeout(r, 500));
            //   alert(JSON.stringify(values, null, 2));
            // }}
            onSubmit={(values) => {
              const params = {
                sheetsId: SHEETS_ID,
                range: "Sheet1",
                valueInputOption: "RAW",
                insertDataOption: "INSERT_ROWS",
              };
              const valueRangeBody = {
                majorDemension: "ROWS",
                values: [values],
              };
              let request = gapi.client.sheets.spreadsheets.values.append(
                params,
                valueRangeBody
              );
              request.then(
                (response) => {
                  console.log("response:", response.result);
                },
                (reason) => {
                  console.error("error:", reason.result.error.message);
                }
              );
            }}
          >
            <Form className="login-form">
              <label className="lable" htmlFor="name">
                نام و نام خانوادگی
              </label>
              <Field
                className="field"
                id="name"
                name="name"
                placeholder="نام و نام خانوادگی"
              />

              <label className="lable" htmlFor="email">
                ایمیل
              </label>
              <Field
                className="field"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />

              <label className="lable" htmlFor="phoneNumber">
                شماره تلفن
              </label>
              <Field
                className="field"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="شماره تلفن"
              />
              <button className="submit" type="submit">
                ثبت نام
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default App;
