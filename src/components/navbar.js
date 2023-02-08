import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import i18next from "i18next";



const language = [
    {
        code: 'uz',
        name: 'UZB',
        country_code: 'uz'
    },
    {
        code: 'uzb',
        name: 'ЎЗБ',
        country_code: 'uzb'
    },
    // {
    //     code: 'en',
    //     name: 'EN',
    //     country_code: 'en'
    // },
    // {
    //     code: 'ru',
    //     name: 'RU',
    //     country_code: 'ru'
    // }
];


function Navbar(props) {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);



    return (
        <div className="navbar-container">
            <div className="nav-brand">
                <a href="/"><img src="./images/logo2.png" alt=""/></a>
            </div>

            <ul className="nav-menu-desktop">

                <li onClick={() => {
                    navigate('/');
                }} className="nav-item">
                    {t('menuOne')}
                </li>

                <li onClick={() => {
                    navigate('/information');
                }} className="nav-item">
                    {t('menuTwo')}
                </li>

                <li onClick={() => {
                    navigate('/news');
                }} className="nav-item">
                    {t('menuTree')}
                </li>

                <li onClick={() => {
                    navigate('/manual-site');
                }} className="nav-item">
                    {t('menuFour')}
                </li>

                <li onClick={() => {
                    navigate('/about-us');
                }} className="nav-item">
                    {t('menuFive')}
                </li>

            </ul>

            <div className={toggleMenu ? "nav-menu-mobile" : "nav-menu-mobile hide-menu"}>
                <ul  className="nav-menu">
                    <div className="xbtn">
                        <img onClick={() => setToggleMenu(!toggleMenu)} src="./images/close.png" alt=""/>
                    </div>


                    <li onClick={() => {
                        navigate('/');
                        setToggleMenu(!toggleMenu);
                    }} className="nav-item">
                        {t('menuOne')}
                    </li>

                    <li onClick={() => {
                        navigate('/information');
                    }} className="nav-item">
                        {t('menuTwo')}
                    </li>

                    <li onClick={() => {
                        navigate('/news');
                        setToggleMenu(!toggleMenu);
                    }} className="nav-item">
                        {t('menuTree')}
                    </li>

                    <li onClick={() => {
                        navigate('/manual-site');
                        setToggleMenu(!toggleMenu);
                    }} className="nav-item">
                        {t('menuFour')}
                    </li>

                    <li onClick={() => {
                        navigate('/about-us');
                        setToggleMenu(!toggleMenu);
                    }} className="nav-item">
                        {t('menuFive')}
                    </li>




                </ul>
            </div>

            <div className='language-box'>
                <Dropdown>
                    <Dropdown.Toggle variant="light" className='text-dark' id="dropdown-basic">
                        {language.map((item,index) => {
                            return <div key={index}>
                                {i18next.language === item.code ? item.name : ""}
                            </div>
                        })}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            language.map(({code, name, country_code}) => (
                                <li key={country_code}>
                                    <div onClick={() => {
                                        i18next.changeLanguage(code);
                                        localStorage.setItem("lng", code)
                                    }} className='d-flex '>
                                        <Dropdown.Item>
                                            {name}
                                        </Dropdown.Item>
                                    </div>
                                </li>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div onClick={() => setToggleMenu(!toggleMenu)} className="burger-for-menu">
                <img src="./images/burgermenu.png" alt=""/>
            </div>

        </div>
    );
}

export default Navbar;