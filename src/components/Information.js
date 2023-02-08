import React, {useContext, useEffect, useState} from 'react';
import Navbar from "./navbar";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {MyContext} from "../App";

function Information(props) {
    let value = useContext(MyContext);
    const [info, setInfo] = useState();
    const {t} = useTranslation();
    const [menuId, setMenuId] = useState(1);
    const [name,setName]=useState('category1');


    useEffect(() => {
        axios.get(`${value.url}api/yuvish/`).then((response) => {
            setInfo(response.data);
        }).catch((error) => {

        });
    }, []);

    const menu = [
        {
            id: 1,
            name: t('category1'),
            url: "yuvish"
        },
        {
            id: 2,
            name: t('category2'),
            url: "kafanlash"
        },
        {
            id: 3,
            name: t('category3'),
            url: "janoza"
        },
        {
            id: 4,
            name: t('category4'),
            url: "dafn"
        },
        {
            id: 5,
            name: t('category5'),
            url: "taziya"
        },
        {
            id: 6,
            name: t('category6'),
            url: "exson"
        },
        {
            id: 7,
            name: t('category7'),
            url: "meros"
        }
    ];

    return (
        <div className="information-container">
            <Navbar/>
            <div className="info-box">
                <div className="left">
                    <div className="items">
                        {
                            menu.map((item, index) => {
                                return <div onClick={() => {
                                    setMenuId(item.id);
                                    setName(item.name);
                                    axios.get(`${value.url}api/${item.url}/`).then((response) => {
                                       if (response.data.length>0) setInfo(response.data); else setInfo("");
                                        console.log(response.data)
                                    }).catch((status) => {});
                                }} key={index}
                                            className={item.id === menuId ? "active" : ""}>{item.name}</div>
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        {t(name)}
                    </div>
                    <div className="bottom">
                        <div className="left">
                            {
                                info ?   <video src={info[info.length-1].video} controls ></video> : ""
                            }
                        </div>
                        <div className="right">
                            {info ? info[info.length-1].text : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;