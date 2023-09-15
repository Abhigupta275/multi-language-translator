import React from "react"
import Menu from "../component/menu"
import Languageoption from '../component/language-dropdown'
import { useTranslation } from 'react-i18next'
import i18next from "i18next"
import './pages.css'

const Contactus = () => {
    const { t } = useTranslation();
    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value)
    }
    return (
        <div>
            <Menu />
            <Languageoption onChange={(e) => handleClick(e)} />
            <div className="content-container">
                <h1>{t('contact')}</h1>
                <p>{t('welcome')}</p> <p>{t('data')}</p>
                <div />
            </div>
        </div>

    )
}
export default Contactus