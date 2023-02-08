import React, {useContext, useState} from 'react';
import Navbar from "./navbar";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {MyContext} from "../App";

function AddDeceased(props) {
    let value = useContext(MyContext);
    const {t} = useTranslation();
    const aboutBox = {
        first_name: "",
        last_name: "",
        region: "",
        district: "",
        cemetery: "",
        cemetery_number: 0,
        birth_date: "",
        death_date: "",
        bio: "",
        image: null
    };

    function getInputs(e) {
        aboutBox[e.target.name] = e.target.value;
    }

    function getImage(e) {
        aboutBox.image = e.target.files[0]
    }

    function postText() {

        if (aboutBox.first_name.trim().length > 0 && aboutBox.last_name.trim().length > 0
            && aboutBox.bio.trim().length > 0 && aboutBox.image !== null &&
            aboutBox.birth_date.trim().length > 0 && aboutBox.death_date.trim().length > 0 &&
            aboutBox.cemetery.trim().length > 0 && aboutBox.cemetery_number && aboutBox.region.trim().length > 0
            && aboutBox.district.trim().length > 0) {

            let Post = new FormData();

            for (let key in aboutBox) {
                Post.append(key, aboutBox[key])
            }

            axios.post(`${value.url}api/deadperson/`, Post).then((response) => {
                window.location.pathname = '/about-deceased';
                sessionStorage.setItem("personId", response.data.id);
            }).catch((error) => {
                console.log(error)
            });

        } else alert("Formani to'ldiring")
    }


    return (
        <div className="add-deceased">
            <Navbar/>

            <div className="title">{t('btnTwo')}</div>
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

                <label htmlFor="first_name">{t('label3')} </label>
                <input onChange={getInputs} name="first_name" className="form-control" type="text" id="first_name"/>

                <label htmlFor="last_name">{t('label10')} </label>
                <input onChange={getInputs} name="last_name" className="form-control" type="text" id="last_name"/>

                <label htmlFor="yearsOld">{t('label4')}</label>
                <input onChange={getInputs} name="birth_date" className="form-control" type="date" id="yearsOld"/>

                <label htmlFor="yearDied">{t('label5')}</label>
                <input onChange={getInputs} name="death_date" className="form-control" type="date" id="yearDied"/>

                <label htmlFor="cemetery">{t('label6')} </label>
                <input onChange={getInputs} name="cemetery" className="form-control" type="text" id='cemetery'/>

                <label htmlFor="numberGrave">{t('label7')} </label>
                <input onChange={getInputs} name="cemetery_number" className="form-control" type="number"/>

                <label htmlFor="photo">{t('label8')} </label>
                <input onChange={getImage} name="image" className="form-control" type="file"/>

                <label htmlFor="des">{t('label9')} </label>
                <textarea onChange={getInputs} name="bio" className="form-control" id="des" cols="30"
                          rows="10"></textarea>

                <div onClick={postText} className="add-btn">{t('btnThree')}</div>
            </div>

        </div>
    );
}

export default AddDeceased;