import React from "react";
import {Link} from "react-router-dom";
import like from "../assets/images/icon/like.png";

export default class PreventMobileWidget extends React.Component {
    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                fontFamily: 'Dubai'
            }}>
                لطفا گوشی خود را افقی نگه دارید
            </div>
        );
    }
}
