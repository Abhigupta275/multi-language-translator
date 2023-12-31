import React from "react";
import Menu from "../component/menu";
import Languageoption from "../component/language-dropdown";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import "./pages.css";

const Aboutus = () => {
    const { t } = useTranslation();

    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value);
    }

    return (
        <div >
            <Menu />
            <Languageoption onChange={(e) => handleClick(e)} />

            <div className="content-container">
                <h1>{t('about')}</h1>
                <p>{t('welcome')}</p>
                <p>{t('aboutData')}</p>
            </div>
        </div>
    );
}

export default Aboutus;
