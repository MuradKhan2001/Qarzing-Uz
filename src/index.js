import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/main.scss";
import "../src/styles/media.scss";
import "../src/styles/StyleNAvbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {BrowserRouter as Router} from "react-router-dom";
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import uz from "./components/lng/uz/uz.json";
import ru from "./components/lng/ru/ru.json";
import en from "./components/lng/en/en.json";
import uzb from "./components/lng/uzb/uzb.json";


i18next.use(initReactI18next).init({
    resources: {
        uz: {
            translation: uz,
        },
        ru: {
            translation: ru,
        },
        en: {
            translation: en,
        },
        uzb: {
            translation: uzb,
        },
    },
    lng: localStorage.getItem("lng") || "uzb",
});

export default i18next;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);
