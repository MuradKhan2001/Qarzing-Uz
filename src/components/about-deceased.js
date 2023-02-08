import React, {useContext, useEffect, useState} from 'react';
import Navbar from "./navbar";
import {MyContext} from "../App";
import axios from "axios";

function AboutDeceased(props) {

    let value = useContext(MyContext);
    const [info, setInfo]= useState({});

    useEffect(() => {
        axios.get(`${value.url}api/deadperson/${sessionStorage.getItem("personId")}`).then((response) => {
            setInfo(response.data);
            console.log(response.data)
        }).catch((status) => {

        });
    }, []);

    return (
        <div className="about-deceased">
            <Navbar/>
            { info ?
                <div className="about-box">
                    <div className="photo">
                        <img src={info.image} alt=""/>
                    </div>
                    <div className="names">
                        {info.first_name}
                        {info.last_name}
                    </div>
                    <div className="years">
                        ({info.birth_date} - {info.death_date})
                    </div>
                    <div className="description">
                        {info.bio}
                    </div>
                </div>
                : ""
            }

        </div>
    );
}

export default AboutDeceased;