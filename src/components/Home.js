import React from 'react';
import Navbar from "./navbar";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

function Home(props) {
    const {t} = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="home-box">
            <div className="home">
                <Navbar/>
                <div className="bottom-side">
                    <div onClick={()=>{
                        navigate('/search-deceased')
                    }} className="left-btn">
                        {t('btnOne')}
                    </div>
                    <div onClick={()=>{
                        navigate('/add-deceased')
                    }} className="right-btn">
                        {t('btnTwo')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;