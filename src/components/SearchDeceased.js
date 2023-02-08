import React, {useContext} from 'react';
import Navbar from "./navbar";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {MyContext} from "../App";

function SearchDeceased(props) {
    let value = useContext(MyContext);
    const {t} = useTranslation();
    const navigate = useNavigate();
    const aboutBox = {
        region: "",
        district: "",
        cemetery: "",
        cemetery_number: 0
    };


    function getInputs(e) {
        aboutBox[e.target.name] = e.target.value;
    }


    function postText() {

        if (aboutBox.cemetery.trim().length > 0 && aboutBox.cemetery_number && aboutBox.region.trim().length > 0
            && aboutBox.district.trim().length > 0) {

            axios.post(`${value.url}api/deadperson/search/`, aboutBox).then((response) => {
                sessionStorage.setItem("personId", response.data.id);
                window.location.pathname = '/about-deceased';
            }).catch((error) => {
                alert("Marhum haqida ma'lumot topilmadi !")
            });

        } else alert("Formani to'ldiring")
    }


    return (
        <div className="search-deceased">
            <Navbar/>

            <div className="title">{t('btnOne')}</div>
            <div className="inputs">
                <label htmlFor="region">{t('label1')}</label>
                <select onChange={getInputs} name="region" id="region" className="form-control">
                    <option value=""></option>
                    <option value="Toshkent">{t('region1')}</option>
                    <option value="Samarqand">{t('region2')}</option>
                    <option value="Buxoro">{t('region3')}</option>
                    <option value="Andijon">{t('region4')}</option>
                    <option value="Sirdaryo">{t('region5')}</option>
                    <option value="Jizzax">{t('region6')}</option>
                    <option value="Surxondaryo">{t('region7')}</option>
                    <option value="Namangan">{t('region8')}</option>
                    <option value="Xorazm">{t('region9')}</option>
                    <option value="Fargo'na">{t('region10')}</option>
                    <option value="Qashqadaryo">{t('region11')}</option>
                    <option value="Navoiy">{t('region12')}</option>
                    <option value="Qoraqalpog'iston">{t('region13')}</option>
                </select>

                <label htmlFor="district">{t('label2')}</label>
                <input onChange={getInputs} name="district" className="form-control" type="text" id="district"/>

                <label htmlFor="cemetery">{t('label6')} </label>
                <input onChange={getInputs} name="cemetery" className="form-control" type="text" id='cemetery'/>

                <label htmlFor="numberGrave">{t('label7')} </label>
                <input onChange={getInputs} name="cemetery_number" className="form-control" type="number"/>

                <div onClick={postText} className="add-btn">{t('btnFour')}</div>
            </div>
        </div>
    );
}

export default SearchDeceased;