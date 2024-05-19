import React from 'react';
import './footer.css';
import landscape1 from './../../images/landscape1.jpg';
import landscape2 from './../../images/landscape2.jpg';
import { useTranslation } from 'react-i18next';
import {Link, NavLink} from "react-router-dom"; // Импортируйте useTranslation

const Footer = () => {
    const { t } = useTranslation(); // Используйте хук useTranslation

    return ( 
        <footer>
            <div className='footer-box'>
                <div className='footer-text'>
                    <div className='keeper'>
                        <p>{t('footer_write_to_us')}</p>
                        <p>{t('footer_email')}</p>
                        <div className='review'>
                            <p>{t('footer_description')}</p>
                        </div>
                        <p>{t('footer_copyright')}</p>
                    </div>
                </div>
                <div className='footer-img'>
                    <div className='narodi-i-priroda'>
                        <div className='text-box-footer'>
                            <p>{t('footer_nations_nature')}<br/><NavLink to="/nature">{t('footer_learn_more')}</NavLink></p>
                        </div>
                    </div>
                    <div className='narodi-i-interview'>
                        <div className='text-box-footer'>
                            <p>{t('footer_nations_interview')}<br/><NavLink to="/interviews">{t('footer_learn_more')}</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
