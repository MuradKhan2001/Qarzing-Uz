import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


function LogInAdmin(props) {
    const navigate = useNavigate();


    return (
        <div className="login-box">
            <div className="card">
                <div className="center">
                    <a href="http://139.144.186.40/admin/login/?next=/admin/"  className="login-btn">Aminga kirish</a>
                </div>
            </div>
        </div>
    );
}

export default LogInAdmin;