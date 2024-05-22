import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Help.css';
import lenobl from "../../images/len-obl.png";
import pribaikal from "../../images/pribaikal.png";
import sever from "../../images/sever.png";
import dalnVostok from "../../images/daln-vostok.png"
import mamont from "../../images/eff-mamonta.png"
import arctika from "../../images/dobrov-arktiki.png";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Help() {
    const { t } = useTranslation();

    const Link = ({ to, children, external }) => {
        if (external) {
            return <a href={to} target="_blank" rel="noopener noreferrer" className="href-text">{children}</a>;
        }
        return <NavLink to={to} className="href-text">{children}</NavLink>;
    };

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
                        <img className='image-help' src={lenobl} alt="Leningrad Region" />
                        <p className='text-help'> <Link to="https://vk.com/tsentr_korennyh_narodov_lo" external>{t('link_len_obl')}</Link> &mdash; {t('len_obl')}</p>
                    </div>
                    <div className='help-container border-none border-top-none'>
                        <img className='image-help' src={pribaikal} alt="Pribaikal Region" />
                        <p className='text-help'><Link to="https://vk.com/news_etno" external>{t('link_peoples_center_pribaikal')}</Link> &mdash; {t('peoples_center_pribaikal')}</p>
                    </div>
                    <div className='help-container border-none border-right-none'>
                        <img className='image-help' src={sever} alt="Northern Region" />
                        <p className='text-help'><Link to="https://vk.com/club312279" external>{t('link_peoples_severa')}</Link> &mdash; {t('peoples_severa')}</p>
                    </div>
                </div>
                <div className="help-sec2">
                    <p className="text-forum"><Link to="https://events.myrosmol.ru/forums/rossiyskiy_sever_2023/?ysclid=lucxa0f1kf983533729" external>{t('forum_title')}</Link>
                        <br/><br/>{t('forum_info')}</p>
                </div>
                <div className="help-sec3">
                    <div className="help-container-2">
                        <img src={dalnVostok} alt="Far Eastern Region" className="image-help-2"/>
                        <p className='text-help text-size-1'><Link to="https://vk.com/club215952633" external>{t('link_history_peoples_dv')}</Link>
                            <br/><br/>{t('history_peoples_dv')}</p>
                    </div>
                    <div className="help-container-2 reverse-elements">
                        <img src={mamont} alt="Mammoth Effect" className="image-help-2"/>
                        <p className='text-help text-size-2'><Link to="https://mammotheffect.org/" external>{t('link_mammoth_effect')}</Link>
                            <br/><br/>{t('mammoth_effect')}</p>
                    </div>
                    <div className="help-container-2">
                        <img src={arctika} alt="Arctic Volunteers" className="image-help-2"/>
                        <p className='text-help text-size-3'><Link to="https://dobro.ru/project/2024?ysclid=lucy0iwu35590931656" external>{t('link_arctic_volunteers')}</Link>
                            <br/><br/>{t('arctic_volunteers')}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Help;
