import React, {useState, useContext, useEffect} from 'react';
import Navbar from "./navbar";
import {MyContext} from "../App";
import axios from "axios";
import {useTranslation} from "react-i18next";

function AboutUs(props) {
    let value = useContext(MyContext);
    const [aboutBox, setAboutBox] = useState();
    const {t} = useTranslation();

    useEffect(() => {
        axios.get(`${value.url}api/about/`).then((response) => {
            setAboutBox(response.data);
        }).catch((status) => {

        });
    }, []);

    return (
        <div className="about-us">
            <Navbar/>
            {
                aboutBox ? <div className="bottom-side">
                    <div className="left-side">
                        {
                            aboutBox[0].image ?
                                <img src={aboutBox[0].image} alt=""/> :
                                <video src={aboutBox[0].video} controls></video>
                        }
                    </div>
                    <div className="right-side">
                        <div className="title">
                            {t('menuFive')}
                        </div>
                        <p>
                            {aboutBox[0].description}
                        </p>
                    </div>
                </div> : ""
            }
        </div>
    );
}

export default AboutUs;