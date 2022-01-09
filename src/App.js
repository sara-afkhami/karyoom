import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import ReactPlayer from "react-player/lazy";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import like from "./images.png";
import profile from "./Intersection 3.png";
import insta from "./instagram.png";
import axios from "axios";
let array = [];
toast.configure();

function App() {
  const [step, setstep] = useState(0);
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState();

  const agree = () => {
    array.push(1);
  };
  const disagree = () => {
    array.push(0);
  };

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "الزامی";
    }
    return error;
  };

  const success = () => {
    toast("اطلاعات شما با موفقیت دریافت شد");
  };
  // const fail = () => {
  //   toast("اطلاعات شما کامل نیست");
  // };
  // const notify = (validationSchema) =>{
  //   if(validationSchema){
  //     success();
  //   }
  //   else fail();
  // }

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "!نام خیلی کوتاه است")
      .max(50, "!نام خیلی بلند است")
      .required("الزامی"),
    email: Yup.string().email("ایمیل نامعتبر").required("الزامی"),
    phoneNumber: Yup.string()
      .min(10, "شماره تلفن اشتباه است")
      .max(11, "شماره تلفن اشتباه است")
      .required("الزامی"),
  });

  if (step === 0) {
    console.log("object");
    return (
      <div className="step-1">
        <button className="next-button" onClick={() => setstep(1)}>
          !حرکت
        </button>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="step-2">
        <button
          className="next-button green"
          onClick={() => {
            setstep(2);
            agree();
          }}
        >
          <img className="agree" src={like} alt=" " />
          موافقم
        </button>
        <button
          className="next-button red"
          onClick={() => {
            setstep(2);
            disagree();
          }}
        >
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، دقیق میدونم
        </button>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="step-3">
        <div className="tip">
          <img className="profile" src={profile} alt=" " />
          <div className="dialogue">
            <p className="paragraph">
              نظرتون راجع به این که با یک نفر متخصص مشورت کنید، تست هایی رو
              انجام بدید و تحلیل کاملی برای شناخت خودتون و مسیر شغلیتون بدست
              بیارید چیه؟ همین الان هم میتونید از طریق پیج اینستاگراممون در
              دایرکت . ...درخواست بدید و این روند رو به صورت کاملا رایگان انجام
              بدید
              <br></br>
              <a
                className="instagram"
                href="https://www.instagram.com/kariumia/"
              >
                <img className="insta-image" src={insta} alt="" />
                kariumia
              </a>
            </p>
          </div>
        </div>
        <button
          className="next-button green"
          onClick={() => {
            setstep(3);
            agree();
          }}
        >
          <img className="agree" src={like} alt=" " />
          این خیلی میتونه کمک کنه
        </button>
        <button
          className="next-button red"
          onClick={() => {
            setstep(3);
            disagree();
          }}
        >
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
      <div className="step-4">
        <button className="next-button" onClick={() => setstep(4)}>
          !ادامه بده
        </button>
      </div>
    );
  }
  if (step === 4) {
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
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              />
            </div>
          </div>
        </div>
        <button
          className="next-button green"
          onClick={() => {
            setstep(5);
            agree();
          }}
        >
          <img className="agree" src={like} alt=" " />
          خیلی خوب بود
        </button>
        <button
          className="next-button red"
          onClick={() => {
            setstep(5);
            disagree();
          }}
        >
          {" "}
          <img className="disagree" src={like} alt=" " />
          دوسش نداشتم
        </button>
      </div>
    );
  }
  if (step === 5) {
    return (
      <div className="step-6">
        <button className="next-button" onClick={() => setstep(6)}>
          !ادامه بده
        </button>
      </div>
    );
  }
  if (step === 6) {
    return (
      <div className="step-7">
        <button
          className="next-button green"
          onClick={() => {
            setstep(7);
            agree();
          }}
        >
          <img className="agree" src={like} alt=" " />
          وای ازین بهتر نمیشه
        </button>
        <button
          className="next-button red"
          onClick={() => {
            setstep(7);
            disagree();
          }}
        >
          {" "}
          <img className="disagree" src={like} alt=" " />
          حالا چه ضرورتی داره، بعدا تهیه می کنم
        </button>
      </div>
    );
  }
  if (step === 7) {
    return (
      <div className="step-8">
        <button
          className="next-button green"
          onClick={() => {
            setstep(8);
            agree();
          }}
        >
          <img className="agree" src={like} alt=" " />
          موافقم
        </button>
        <button
          className="next-button red"
          onClick={() => {
            setstep(8);
            disagree();
          }}
        >
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، دقیق میدونم
        </button>
      </div>
    );
  }
  if (step === 8) {
    return (
      <div className="step-9">
        <button
          className="next-button green"
          onClick={() => {
            setstep(9);
            agree();
          }}
        >
          <img className="agree" src={like} alt=" " />
          موافقم
        </button>
        <button
          className="next-button red"
          onClick={() => {
            setstep(9);
            disagree();
          }}
        >
          {" "}
          <img className="disagree" src={like} alt=" " />
          مخالفم، دقیق میدونم
        </button>
      </div>
    );
  }
  if (step === 9) {
    return (
      <div className="step-10">
        {/* <img className="login-image" src={formImage} alt="" /> */}
        <div className="form">
          <div className="form-body">
          <h3 className="form-title">
            ما خیلی زود میایم <br></br>ثبت نام کن تا تو افتتاحیه دعوتت کنیم
          </h3>
          <Formik
            className="login"
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
            }}
            validationSchema={FormSchema}
            onSubmit={(values) => {
              setName(values.name);
              setMail(values.email);
              setPhone(values.phoneNumber);
              setStatus(array);

              const object = { name, email, phone, status };
              console.log(JSON.stringify(object));

              axios
                .post(
                  "https://sheet.best/api/sheets/dd13bc57-63be-4c25-a45a-78fce09043c5",
                  object
                )
                .then((response) => {
                  console.log("--->>> " + response);
                });
            }}
          >
            {({ errors, touched }) => (
              <Form className="login-form">
                <label className="label" htmlFor="name">
                  نام و نام خانوادگی
                </label>
                <Field
                  className="field"
                  id="name"
                  name="name"
                  placeholder="نام و نام خانوادگی"
                />
                {/* {errors.name && touched.name && (
                  <div className="required">{errors.name}</div>
                )} */}
                <label className="label" htmlFor="email">
                  ایمیل
                </label>
                <Field
                  className="field"
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
                {/* {errors.email && touched.email && (
                  <div className="required">{errors.email}</div>
                )} */}
                <label className="label" htmlFor="phoneNumber">
                  شماره تلفن
                </label>
                <Field
                  className="field"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="شماره تلفن"
                />
                {/* {errors.phoneNumber && touched.phoneNumber && (
                  <div className="required">{errors.phoneNumber}</div>
                )} */}
                <button className="submit" onClick={success} type="submit">
                  ثبت نام
                </button>
              </Form>
            )}
          </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
