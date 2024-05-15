import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Help.css';
import lenobl from "../../images/len-obl.png";
import pribaikal from "../../images/pribaikal.png";
import sever from "../../images/sever.png";
import dalnVostok from "../../images/daln-vostok.png"
import mamont from "../../images/eff-mamonta.png"
import arctika from "../../images/dobrov-arktiki.png"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


function Help() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <div className="help">
                <div className="line-bottom">
                    <div className="title-help">
                        <p>{t('title_help_page')}</p>
                    </div>
                </div>
                <div className='help-sec1'>
                    <div className='help-container border-none'>
                        <img className='image-help' src={lenobl} alt="" />
                        <p className='text-help'> <NavLink className="href-text" to="https://vk.com/tsentr_korennyh_narodov_lo">{t('link_len_obl')}</NavLink> &mdash;{t('len_obl')}</p>
                    </div>
                    <div className='help-container border-none border-top-none'>
                        <img className='image-help' src={pribaikal} alt="" />
                        <p className='text-help'><NavLink className="href-text" to="https://vk.com/news_etno">{t('link_peoples_center_pribaikal')}</NavLink> &mdash;{t('peoples_center_pribaikal')}</p>
                    </div>
                    <div className='help-container border-none border-right-none'>
                        <img className='image-help' src={sever} alt="" />
                        <p className='text-help'><NavLink className="href-text" to="https://vk.com/club312279">{t('link_peoples_severa')}</NavLink> &mdash;{t('peoples_severa')}</p>
                    </div>
                </div>
                <div className="help-sec2">
                    <p className="text-forum"><NavLink className="href-text" to="https://events.myrosmol.ru/forums/rossiyskiy_sever_2023/?ysclid=lucxa0f1kf983533729">{t('forum_title')}</NavLink>
                        <br/><br/>{t('forum_info')}</p>
                </div>
                <div className="help-sec3">

                    <div className="help-container-2">
                        <img src={dalnVostok} alt="" className="image-help-2"/>
                        <p className='text-help text-size-1'><NavLink className="href-text" to="https://vk.com/club215952633">{t('link_history_peoples_dv')}</NavLink>
                            <br/><br/>{t('history_peoples_dv')}</p>
                    </div>
                    <div className="help-container-2 reverse-elements">
                        <img src={mamont} alt="" className="image-help-2"/>
                        <p className='text-help text-size-2'><NavLink className="href-text" to="https://mammotheffect.org/">{t('link_mammoth_effect')}</NavLink>
                            <br/><br/>{t('mammoth_effect')}</p>
                    </div>
                    <div className="help-container-2">
                        <img src={arctika} alt="" className="image-help-2"/>
                        <p className='text-help text-size-3'><NavLink className="href-text" to="https://dobro.ru/project/2024?ysclid=lucy0iwu35590931656">{t('link_arctic_volunteers')}</NavLink>
                            <br/><br/>{t('arctic_volunteers')}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Help;
