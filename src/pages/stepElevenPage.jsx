import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
let array = [];
toast.configure();

const success = () => {
  toast("اطلاعات شما با موفقیت دریافت شد");
};


function StepElevenPage() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState();
  const [showForm, setShowForm] = React.useState(true);
  const hideForm = () => setShowForm(false);

  return (
    <div className="step-11 page">
      {/* <img className="login-image" src={formImage} alt="" /> */}
      { showForm ?<div className="form">
        <div className="form-body">
          <h3 className="form-title">
            ما خیلی زود میایم <br/>ثبت نام کن تا تو افتتاحیه دعوتت کنیم
          </h3>
          <Formik
            className="login"
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
            }}
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
                  hideForm()
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
      </div>: null}
    </div>
  );
}

export default StepElevenPage;
