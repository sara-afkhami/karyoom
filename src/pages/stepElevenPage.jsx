import React, { useEffect, useState } from "react";
import {Formik, Field, Form} from "formik";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import StorageHelper from "../helper/storageHelper";
import NumberFormat from 'react-number-format';
import { withLastLocation } from 'react-router-last-location';
import { getNumberFromEndStrings } from "../utils/functionsStrings";
import { useLocation } from "react-router-dom";
import { useLastLocation } from 'react-router-last-location';



toast.configure();

const success = () => {
    toast.success("اطلاعات شما با موفقیت دریافت شد");
};

const error = () => {
    toast.error("لطفا اطلاعات را به درستی وارد کنید");
};

function isUserRegistered() {
    return localStorage.getItem("submit");
}

const StepElevenPage = ()=> {

    const [showForm, setShowForm] = useState(true);
    const location = useLocation();
    const lastLocation = useLastLocation()

    const currentPathname = getNumberFromEndStrings(location.pathname)
    const [prvPage , setprevPage] = useState()

    const hideForm = () => {
        setShowForm();
        localStorage.setItem("submit", "true");
    };
    useEffect(()=>{
        if(lastLocation){
            // console.log(lastLocation)
            setprevPage(getNumberFromEndStrings(lastLocation.pathname))
        }
    },[lastLocation])

    return (
        <>
        {/* {prvPage && ( */}
        <div className={`step-11 page from-${prvPage}-to-${currentPathname}`}>
            {!isUserRegistered() && showForm ? <div className="form">
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
                            if (values.name && values.email && values.phoneNumber) {

                                let name = values.name;
                                let email = values.email;
                                let phone = values.phoneNumber;
                                let status = StorageHelper.getSteps();

                                const object = {name, email, phone, status};
                                console.log(JSON.stringify(object));
                                axios.post("https://sheet.best/api/sheets/dd13bc57-63be-4c25-a45a-78fce09043c5", object)
                                    .then((response) => {
                                        success();
                                        hideForm();
                                        console.log("--->>> " + response);
                                    });
                            } else {
                                error();
                            }

                        }}>
                        {() => (
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
                                <label className="label" htmlFor="phoneNumber">
                                    شماره تلفن
                                </label>
                                <NumberFormat
                                    type="numbers"
                                    className="field"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="شماره تلفن"
                                    isNumericString={true}
                                />
                                <button className="submit" type="submit">
                                    ثبت نام
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div> : null}
        </div>
        {/* )} */}
        </>
        
    );
}

export default withLastLocation(StepElevenPage);
