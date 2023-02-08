import React, {useContext, useEffect, useState} from 'react';
import Navbar from "./navbar";
import {MyContext} from "../App";
import axios from "axios";

function News(props) {
    let value = useContext(MyContext);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`${value.url}api/news/`).then((response) => {
            setNews(response.data);
        }).catch((status) => {

        });
    }, []);

    return (
        <div className="news">
            <Navbar/>
            {
                news.map((item, index) => {
                    return <div className="bottom-side" key={index}>
                        <div className="left-side">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="right-side">
                            <div className="title">
                                {item.title}
                            </div>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default News;