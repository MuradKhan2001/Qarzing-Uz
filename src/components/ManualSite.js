import React, {useContext, useEffect, useState} from 'react';
import Navbar from "./navbar";
import {useTranslation} from "react-i18next";
import {MyContext} from "../App";
import axios from "axios";

function ManualSite(props) {
    let value = useContext(MyContext);
    const [manualBox, setManualBox] = useState();
    const {t} = useTranslation();

    useEffect(() => {
        axios.get(`${value.url}api/manual/`).then((response) => {
            setManualBox(response.data);
        }).catch((status) => {

        });
    }, []);
    return (
        <div className="manual-site">
            <Navbar/>
            {
                manualBox ? <div className="bottom-side">
                    <div className="left-side">
                        {
                            manualBox[manualBox.length - 1].image ?
                                <img src={manualBox[manualBox.length - 1].image} alt=""/> :
                                <video src={manualBox[manualBox.length - 1].video} controls></video>
                        }
                    </div>
                    <div className="right-side">
                        <div className="title">
                            {t('menuFive')}
                        </div>
                        <p>
                            {manualBox[manualBox.length - 1].description}
                        </p>
                    </div>
                </div> : ""
            }
        </div>
    );
}

export default ManualSite;